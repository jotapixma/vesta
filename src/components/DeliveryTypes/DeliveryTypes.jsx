import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import DeliveryCard from '../Cards/DeliveryCard/DeliveryCard';
import styles from './DeliveryTypes.module.scss';

const data = [
  {
    entrega: "Entrega Inmediata",
    image: "type-delivery.jpeg",
    descripcion: "La mejor oportunidad ahora",
    slug: "entrega-inmediata",
  },
  {
    entrega: "Entrega Futura",
    image: "type-delivery.jpeg",
    descripcion: "Planifica tu inversión",
    slug: "entrega-futura",
  }
];

const DeliveryTypes = () => {
  return (  
    <section className={styles.section}>
      <Container>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Proyectos</h1>
        </div>
        <Grid container spacing={2}>
          {data.map((delivery,index) => (
            <Grid item xs={12} md={6} key={index}>
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