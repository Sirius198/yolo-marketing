import '../src/styles/fonts.css';
import 'focus-visible';

// Tailwind
import '../src/styles/tailwind/base.css';
import '../src/styles/tailwind/utilities.css';

import React from 'react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
