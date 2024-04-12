import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import DeliveryCard from '../Cards/DeliveryCard/DeliveryCard';
import styles from './DeliveryTypes.module.scss';

const data = [
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

const DeliveryTypes = () => {
  return (  
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>Proyectos</h2>
        <Grid container spacing={2}>
          {data.map((delivery,index) => (
            <Grid item xs={12} md={6}>
              <DeliveryCard 
                key={index}
                delivery={delivery}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
 
export default DeliveryTypes;