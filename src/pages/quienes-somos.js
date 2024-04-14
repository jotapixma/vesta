import React from 'react';
import WhoArePage from '@/components/WhoArePage/WhoArePage'
import Layout from '@/components/Layouts/Layout/Layout';
import Head from 'next/head';

export default function contactanos() {
  return (
    <React.Fragment>
       <Head>
        <title>Quiénes Somos</title>
        <meta name="description" content=""/>
      </Head>
      <Layout>
        <WhoArePage/>
      </Layout>
    </React.Fragment>
  )
}
