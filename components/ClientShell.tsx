'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { IMAGES } from '@/assets/images';
import { PostHogPageView } from '@/components/analytics/PostHogPageView';
import { PostHogPhoneClick } from '@/components/analytics/PostHogPhoneClick';
import { PostHogInternationalConversion } from '@/components/analytics/PostHogInternationalConversion';
import InternationalShell from './international/InternationalShell';
import { getLocaleFromPathname } from '@/lib/international/seo';
import { localeInfo } from '@/lib/international/content';

interface ClientShellProps {
  children: ReactNode;
}

const ClientShell = ({ children }: ClientShellProps) => {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  useEffect(() => {
    document.documentElement.lang = locale ? localeInfo[locale].htmlLang : 'pl';
  }, [locale]);

  if (locale) {
    return (
      <>
        <PostHogPageView />
        <PostHogPhoneClick />
        <PostHogInternationalConversion />
        <InternationalShell locale={locale}>{children}</InternationalShell>
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black relative">
      <PostHogPageView />
      <PostHogPhoneClick />
      <PostHogInternationalConversion />
      <div
        className="fixed inset-0 bg-contain bg-center bg-no-repeat opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: `url(${IMAGES.cross})` }}
      />

      <Navbar />
      <Breadcrumb />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default ClientShell;
