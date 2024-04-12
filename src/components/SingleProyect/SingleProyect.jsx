import { Container } from '@mui/material';
import Image from 'next/image';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import styles from './SingleProyect.module.scss';

const SingleProyect = ({proyect}) => {
  return (  
    <section className={styles.section}>
      <Container>
        <Box className={styles.headBox}>
          <h1>{proyect.title}</h1>       
          <p>{proyect.description}</p> 
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <figure>
              <Image 
                src={proyect.image} 
                width="1200" 
                height="800" 
                layout="responsive" 
                alt="image"
              >  
              </Image>
            </figure> 
          </Grid>
          <Grid item xs={12} md={6}>
            <h4>-- Aqui va el formulario --</h4>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: 24}}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              {proyect.gallery.map((item, index) => (
                <Grid item xs={6} md={6} key={index}>
                  <figure>
                    <Image 
                      src={item.image} 
                      width="1200" 
                      height="800" 
                      layout="responsive" 
                      alt="image"
                    >  
                    </Image>
                  </figure> 
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={styles.boxContainer}>
              <Box>
                <h3 className={styles.title}>{proyect.title_2}</h3>
                <p className={styles.description}>{proyect.description_2}</p>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <h2>Caracteristicas</h2>
                  <Box>
                    <h3 className={styles.title}>{proyect.prices.title}</h3>
                    <p className={styles.description}>{proyect.prices.description}</p>
                  </Box>
                  <Box>
                    <h3 className={styles.title}>{proyect.typologies.title}</h3>
                    <p className={styles.description}>{proyect.typologies.description}</p>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box>
                    <h3 className={styles.title}>{proyect.commercial_conditions.title}</h3>
                    <p className={styles.description}>{proyect.commercial_conditions.description}</p>
                  </Box>
                  <Box>
                    <h3 className={styles.title}>{proyect.common_areas.title}</h3>
                    <p className={styles.description}>{proyect.common_areas.description}</p>
                  </Box>
                  <Box>
                    <h3 className={styles.title}>{proyect.construction.title}</h3>
                    <p className={styles.description}>{proyect.construction.description}</p>
                  </Box>
                  <Box>
                    <h3 className={styles.title}>{proyect.project.title}</h3>
                    <p className={styles.description}>{proyect.project.description}</p>
                  </Box>
                </Grid>
              </Grid>


            </Box>
          </Grid>
        </Grid>




      </Container>
    </section>
  );
}
 
export default SingleProyect;