import React from 'react';
import Layout from '@/components/Layouts/Layout/Layout';
import ProyectPage from '@/components/ProyectPage/ProyectPage';
import data from '../../../../utils/proyects.json';

// Mapeo de nombres de proyectos a identificadores internos
const projectSlugToIdMap = {};

// Crea el mapeo de nombres de proyectos a identificadores internos
data.forEach(zone => {
  zone.zones.forEach(project => {
    project.projects.forEach(p => {
      projectSlugToIdMap[p.slug] = p.proyect_id;
    });
  });
});

// Componente de la página que muestra los detalles del proyecto
const ProyectPageBySlug = ({ proyect }) => {

  console.log('proyect 0:', proyect);

  return (
    <React.Fragment>
      <Layout>
        {/* <ProyectPage proyect={proyect}/> */}
      </Layout>
    </React.Fragment>
  );
};

// Función para buscar el proyecto según el slug proporcionado en la URL
export async function getStaticProps({ params }) {
  const { slug } = params;

  // Recuperar el ID del proyecto utilizando el nombre del proyecto (slug)
  const projectId = projectSlugToIdMap[slug];

  // Buscar el proyecto según el ID en los datos cargados desde el archivo JSON
  const proyect = data.reduce((acc, zone) => {
    const project = zone.zones.flatMap(zone => zone.projects).find(p => p.proyect_id === projectId);
    return project ? project : acc;
  }, null);

  // Retornar los datos del proyecto como props para la página
  return {
    props: {
      proyect
    }
  };
}

// Función para obtener los paths (slugs) de las páginas estáticas generadas en build time
export async function getStaticPaths() {
  // Obtener todos los slugs y nombres de proyectos
  const paths = data.flatMap(zone => {
    return zone.zones.flatMap(zone => {
      return zone.projects.map(project => ({
        params: { 
          slug: project.slug
        }
      }));
    });
  });

  // Retornar los paths para las páginas estáticas
  return {
    paths,
    fallback: false // Esto indica a Next.js que si la URL no coincide con ningún slug, se debe mostrar un 404
  };
}

export default ProyectPageBySlug;