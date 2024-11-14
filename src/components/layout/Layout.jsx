import React, { useState, useEffect } from 'react';
import Navigation from '@/components/shared/navigation';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/footer';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="flex min-h-screen flex-col">
        <Navigation
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          currentPath={router.pathname}
        />

        <Header toggleSidebar={() => setIsSidebarOpen(true)} />

        <main className="flex-1 pt-16 transition-all duration-300 md:ml-64">
          {isLoading && (
            <div className="fixed left-0 top-0 z-50 h-1 w-full">
              <div className="animate-loading h-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600" />
            </div>
          )}

          <div className="transition-all duration-300 fade-in">{children}</div>
        </main>

        <div className="transition-all duration-300 md:ml-64">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
