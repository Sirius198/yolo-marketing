import React, { useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';

function ScrollToTop({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      document.getElementById('top')?.scrollIntoView();
    };
    router.events.on('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  // return '';
  return null;
}

export default ScrollToTop;
