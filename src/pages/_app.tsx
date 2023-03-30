import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from '@/styles/ThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Avatar Uploader</title>

        <link rel='shortcut icon' href='/img/icon-branding.webp' />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
