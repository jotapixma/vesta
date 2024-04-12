import React from 'react';
import Link from 'next/link';
import styles from './DeliveryCard.module.scss';

const DeliveryCard = ({delivery}) => {

  console.log('delivery 8:', delivery);

  return ( 
      <Link href={{ pathname: `/proyectos/${delivery.slug}`}}>
        <article className={styles.cardBox}>
          <p>{delivery.descripcion}</p>
          <h2 className={styles.title}>{delivery.entrega}</h2>
        </article>
      </Link>
   );
}
 
export default DeliveryCard;