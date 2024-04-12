import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import ProyectCard from '../Cards/ProyectCard/ProyectCard';
import Box from '@mui/material/Box';
import styles from './ZonesPage.module.scss';

const ZonesPage = ({delivery_type}) => {

  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.mainTitle}>{delivery_type.entrega}</h1>
        {delivery_type.zones.map((zone) => (
          <Box
            key={zone.zone_id}
            className={styles.zoneBox}
          >
            <h2 className={styles.titleZone}>{zone.name}</h2>
            <Grid 
              container 
              spacing={1} 
              justifyContent="flex-start" 
            >
              {zone.projects.map((project) => (
                <Grid item xs={12} md={4} key={project.proyect_id}>
                  <ProyectCard
                    
                    delivery_type={delivery_type} 
                    project={project}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </section>
  );
}
 
export default ZonesPage;