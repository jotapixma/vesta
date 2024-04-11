import React from 'react';
import Layout from '@/components/Layouts/Layout/Layout';
import ProyectPage from '@/components/ProyectPage/ProyectPage';
import data from '../../utils/proyects.json';

// Componente de la página que muestra los detalles del proyecto
const proyect_single = ({ proyect }) => {
  return (
    <React.Fragment>
      <Layout>
        <ProyectPage proyect={proyect}/>
      </Layout>
    </React.Fragment>
  );
};

// Función para buscar el proyecto según el slug proporcionado en la URL
export async function getStaticProps({ params }) {
  const { slug } = params;
  
  // Buscar el proyecto según el slug en los datos cargados desde el archivo JSON
  const proyect = data.find(proyect => proyect.slug === slug);

  // Retornar los datos del proyecto como props para la página
  return {
    props: {
      proyect
    }
  };
}

// Función para obtener los paths (slugs) de las páginas estáticas generadas en build time
export async function getStaticPaths() {
  // Obtener todos los slugs de los proyectos
  const paths = data.map(proyect => ({
    params: { slug: proyect.slug }
  }));

  // Retornar los paths para las páginas estáticas
  return {
    paths,
    fallback: false // Esto indica a Next.js que si la URL no coincide con ningún slug, se debe mostrar un 404
  };
}

export default proyect_single;
