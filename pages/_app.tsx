import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
// import Router from 'next/router';
// import ym from 'react-yandex-metrika';
// import { YMInitializer } from 'react-yandex-metrika';

// Router.events.on('routeChangeComplete', (url: string) => {
//   if (typeof window !== 'undefined') {
//     ym('hit', url);
//   }
// });

export default function App({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop</title>
        <link rel='icon' href='/favicon.ico' />
        {/* <link rel='preconnect' href='https://mc.yandex.ru' /> */}
        <meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
        <meta property='og:local' content='ru_Ru' />
        {/* <YMInitializer accounts={[]} options={{ webvisor: true, defer: true }} version='2' /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
