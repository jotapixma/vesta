import React from 'react';
import Layout from '@/components/Layouts/Layout/Layout';
import DeliveryTypes from '@/components/DeliveryTypes/DeliveryTypes';
import Head from 'next/head';

export default function blog_page() {
  return (
    <React.Fragment>
       <Head>
        <title>Nuestros Proyectos</title>
        <meta name="description" content=""/>
      </Head>
      <Layout>
        <DeliveryTypes/>
      </Layout>
    </React.Fragment>
  )
}
