import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from "@mui/material/Box";
import styles from './DeliveryCard.module.scss';

const DeliveryCard = ({delivery}) => {

  return ( 
      <Link href={{ pathname: `/proyectos/${delivery.slug}`}}>
        <article className={styles.cardBox}>
          <figure className={styles.imgMask}>
            <Image 
              src={delivery.image} 
              width="3840" 
              height="2560" 
              layout="responsive" 
              alt="image"
            >  
            </Image>
          </figure> 
          <Box className={styles.textBox}>
            <h2 className={styles.title}>{delivery.entrega}</h2>
            <p className={styles.description}>{delivery.descripcion}</p>
          </Box>
        </article>
      </Link>
   );
}
 
export default DeliveryCard;