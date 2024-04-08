import React from 'react';
import Layout from '../components/Layouts/Layout/Layout';
import Proyects from '@/components/Proyects/Proyects';
import Head from 'next/head';

export default function blog_page() {
  return (
    <React.Fragment>
       <Head>
        <title>Nuestros Proyectos</title>
        <meta name="description" content=""/>
      </Head>
      <Layout>
        <Proyects/>
      </Layout>
    </React.Fragment>
  )
}
