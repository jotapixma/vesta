import React from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import SingleProyect from '@/components/SingleProyect/SingleProyect';
import data from '../../../utils/proyects.json';
import Layout from '@/components/Layouts/Layout/Layout';

const ProyectoDetalle = ({ proyecto }) => {
  const router = useRouter();
  const { tipo_entrega, nombre_proyecto } = router.query;

  // Aquí puedes filtrar el proyecto según el tipo de entrega y el nombre del proyecto en la URL
  const proyectoSeleccionado = proyecto.zones.reduce((proyectoEncontrado, zona) => {
    const proyectoEnZona = zona.projects.find(proj => proj.slug === nombre_proyecto);
    if (proyectoEnZona) return proyectoEnZona;
    return proyectoEncontrado;
  }, null);

  console.log('proyecto seleccionado:', proyectoSeleccionado);

  if (!proyectoSeleccionado) {
    // Si el proyecto no se encuentra, puedes manejar el caso mostrando un mensaje de error o redireccionando a una página 404
    return (
      <Container>
        <h1>Proyecto no encontrado</h1>
        <p>Lo sentimos, el proyecto solicitado no está disponible.</p>
      </Container>
    );
  }

  // Aquí puedes utilizar el proyectoSeleccionado para mostrar los detalles del proyecto
  return (
    <Layout>
      <SingleProyect
        proyect={proyectoSeleccionado}
      />
    </Layout>
  );
}

export default ProyectoDetalle;

// Función para obtener los datos del proyecto según el tipo de entrega y el nombre del proyecto en la URL
export async function getStaticProps({ params }) {
  // Recupera la data del archivo JSON

  // Retorna la data del proyecto como props para la página
  return {
    props: {
      proyecto: data.find(item => item.slug === params.tipo_entrega)
    }
  };
}

// Función para especificar las rutas estáticas que deben generarse en build time
export async function getStaticPaths() {
  // Obtener todas las rutas de los proyectos
  const paths = data.reduce((acc, current) => {
    current.zones.forEach(zone => {
      zone.projects.forEach(project => {
        acc.push({
          params: {
            tipo_entrega: current.slug,
            nombre_proyecto: project.slug
          }
        });
      });
    });
    return acc;
  }, []);

  // Retornar las rutas estáticas
  return {
    paths,
    fallback: false // Esto indica que no se debe mostrar una página de carga si la ruta no coincide
  };
}