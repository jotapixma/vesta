import Link from 'next/link';
import Image from 'next/image';
import styles from './ProyectCard.module.scss';

const ProyectCard = ({delivery_type, project}) => {
  return (  
    <article>
      <Link href={`/proyectos/${delivery_type.slug}/${project.slug}`}>
        <h3 className={styles.title}>{project.title}</h3>
        <figure>
          <Image 
            src={project.image} 
            width="1200" 
            height="800" 
            layout="responsive" 
            alt="image"
          >  
          </Image>
        </figure> 
      </Link>
    </article>
  );
}
 
export default ProyectCard;