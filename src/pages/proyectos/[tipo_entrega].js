import React from 'react';
import Layout from '@/components/Layouts/Layout/Layout';
import ProyectPage from '@/components/ProyectPage/ProyectPage';
import data from '../../utils/proyects.json';

const ProyectSingle = ({ proyect }) => {
  return (
    <React.Fragment>
      <Layout>
        <ProyectPage proyect={proyect}/>
      </Layout>
    </React.Fragment>
  );
};

export async function getStaticProps({ params }) {
  const { tipo_entrega } = params;
  
  // Buscar el proyecto según el tipo de entrega en los datos cargados desde el archivo JSON
  const proyect = data.find(proyect => proyect.slug === tipo_entrega);

  // Retornar los datos del proyecto como props para la página
  return {
    props: {
      proyect
    }
  };
}

export async function getStaticPaths() {
  // Obtener todos los tipos de entrega como paths
  const paths = data.map(proyect => ({
    params: { tipo_entrega: proyect.slug }
  }));

  // Retornar los paths para las páginas estáticas
  return {
    paths,
    fallback: false
  };
}

export default ProyectSingle;