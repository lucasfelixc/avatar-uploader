import { AppProps } from 'next/app';
import Head from 'next/head';

import { ImageProvider } from '@/context/ImageContext';
import { ThemeProvider } from '@/styles/ThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Avatar Uploader</title>

        <link rel='shortcut icon' href='/img/icon-branding.webp' />
      </Head>
      <ImageProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ImageProvider>
    </>
  );
};

export default MyApp;
