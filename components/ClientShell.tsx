'use client';

import { ReactNode, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { IMAGES } from '@/assets/images';
import { PostHogPageView } from '@/components/analytics/PostHogPageView';

interface ClientShellProps {
  children: ReactNode;
}

const ClientShell = ({ children }: ClientShellProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-black relative">
      <PostHogPageView />
      <div
        className="fixed inset-0 bg-contain bg-center bg-no-repeat opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: `url(${IMAGES.cross})` }}
      />

      <Navbar />
      <Suspense fallback={null}>
        <Breadcrumb />
      </Suspense>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default ClientShell;
