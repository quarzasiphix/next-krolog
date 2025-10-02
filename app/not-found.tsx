import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Strona nie została znaleziona
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            Wróć do strony głównej
          </Link>
        </Button>
      </div>
    </div>
  )
}
