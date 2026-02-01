'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { BreadcrumbProvider } from '@/components/breadcrumb-context'
// import { PostHogProvider } from '@/components/providers/PostHogProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
      },
    },
  }))

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <TooltipProvider>
          <BreadcrumbProvider>
            {children}
            <Toaster />
            <Sonner />
          </BreadcrumbProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
