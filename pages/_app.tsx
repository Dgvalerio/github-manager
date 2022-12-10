import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@/components/wrapper/layout';
import StyleWrapper from '@/components/wrapper/style-wrapper';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>Github Manager</title>
      <meta name="description" content="The assistant for Github" />
      <link rel="icon" href="/fav.png" />
    </Head>
    <StyleWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyleWrapper>
  </>
);

export default App;
