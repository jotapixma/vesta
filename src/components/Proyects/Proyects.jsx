import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProyectCard from '../Cards/ProyectCard/ProyectCard';
import styles from './Proyects.module.scss';

const proyects = [
  {
    entrega: "Entrega Inmediata",
    descripcion: "La mejor oportunidad ahora",
    slug: "entrega-inmediata",
  },
  {
    entrega: "Entrega Futura",
    descripcion: "Planifica tu inversión",
    slug: "entrega-futura",
  }
];



const Proyects = () => {
  return (  
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>Proyectos</h2>
        <Grid container spacing={2}>
          {proyects.map((proyect,index) => (
            <Grid item xs={12} md={6}>
              <ProyectCard 
                key={index}
                proyect={proyect}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
 
export default Proyects;