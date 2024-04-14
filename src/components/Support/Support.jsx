import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SupportCard from '../../components/Cards/SupportCard/SupportCard';
import styles from './Support.module.scss';

let items = [
  {
    "id": '1',
    "image": '/project2.png',
    "title": 'Proyectos',
    "url": '/proyectos',
  },
  {
    "id": '2',
    "image": '/asesorias-2.jpeg',
    "title": 'Asesoria',
    "url": '',
  },
  {
    "id": '3',
    "image": '/proposito.webp',
    "title": 'Quienes somos',
    "url": '/quienes-somos',
  },
  // {
  //   "id": '4',
  //   "image": '/asesorias-2.jpeg',
  //   "title": 'Proceso de la compra',
  // },
];

const Support = ({title}) => {
  return (  
    <section className={styles.supportPanel}>
      <Container>
        <div className="bootstrap-container">
          <div className="title-container">
            <h2 className="title">{title}</h2>
          </div>
          <Box className={styles.supportBox}>
            <Grid container spacing={2}>
              {items &&
                items.map((item) => (
                  <Grid key={item.id} item xs={12} md={4}>
                    <SupportCard item={item}/>
                  </Grid>
                ))
              }
            </Grid>
          </Box>
        </div>
      </Container>
    </section>
  );
}
 
export default Support;