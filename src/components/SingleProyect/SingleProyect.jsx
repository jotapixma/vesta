import { Container } from '@mui/material';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import styles from './SingleProyect.module.scss';
import ContactForm from '../ContactForm/ContactForm';
import ContentPanel from './ContentPanel/ContentPanel';
import Image from "next/legacy/image";

const SingleProyect = ({proyect}) => {
  return (  
    <section className={styles.section}>
      <Box className={styles.headBox}>
        <h1 className={styles.title}>{proyect.title}</h1>       
        <p>{proyect.description}</p> 
      </Box>
      <Box className={styles.formPanel}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <figure className={styles.imgMask}>
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
              <ContactForm/>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      <ContentPanel proyect={proyect}/>

    </section>
  );
}
 
export default SingleProyect;