import '@/styles/base.scss';

import type { AppPropsWithLayout } from 'next/app';

import { AppProvider } from '@/providers/app';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
