import Link from 'next/link';
import Image from 'next/image';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import styles from './ProyectCard.module.scss';

const ProyectCard = ({delivery_type, project}) => {
  console.log('proyect card:', project)

  return (  
    <article className={styles.cardBox}>
      <Link href={`/proyectos/${delivery_type.slug}/${project.slug}`}>
        <figure className={styles.imgMask}>
          <Image 
            src={project.image} 
            width="1200" 
            height="800" 
            layout="responsive" 
            alt="image"
          >  
          </Image>
        </figure> 
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <div className="divisor-line"></div>
          <div className={styles.footer}>
            <div className={styles.row}>
              <BedOutlinedIcon/>
              <p className={styles.description}>{project.typologies.description}</p>
            </div>
            <div className={styles.row}>
              <PaidOutlinedIcon/>
              <p className={styles.description}>Desde UF {project.prices.description}</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
 
export default ProyectCard;