import GalleryCard from '../../Cards/GalleryCard/GalleryCard';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import styles from './ContentPanel.module.scss';

const ContentPanel = ({proyect}) => {
  return (  
    <Container>
      <Grid container spacing={3} style={{ marginTop: 24}}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            {proyect.gallery.map((item, index) => (
              <Grid item xs={6} md={6} key={index}>
                <GalleryCard item={item}/>
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
                <Box className={styles.item}>
                  <div className={styles.item__head}>
                    <PaidOutlinedIcon/>
                    <h3 className={styles.title}>{proyect.prices.title}</h3>
                  </div>
                  <p className={styles.description}>Desde UF {proyect.prices.description}</p>
                </Box>
                <Box className={styles.item}>
                  <div className={styles.item__head}>
                    <BedOutlinedIcon/>
                    <h3 className={styles.title}>{proyect.typologies.title}</h3>
                  </div>
                  <p className={styles.description}>{proyect.typologies.description}</p>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={styles.item}>
                  <h3 className={styles.title}>{proyect.commercial_conditions.title}</h3>
                  <p className={styles.description}>{proyect.commercial_conditions.description}</p>
                </Box>
                <Box className={styles.item}>
                  <h3 className={styles.title}>{proyect.common_areas.title}</h3>
                  <p className={styles.description}>{proyect.common_areas.description}</p>
                </Box>
                <Box className={styles.item}>
                  <h3 className={styles.title}>{proyect.construction.title}</h3>
                  <p className={styles.description}>{proyect.construction.description}</p>
                </Box>
                <Box className={styles.item}>
                  <h3 className={styles.title}>{proyect.project.title}</h3>
                  <p className={styles.description}>{proyect.project.description}</p>
                </Box>
              </Grid>
            </Grid>


          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
 
export default ContentPanel;