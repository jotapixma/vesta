import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './ProyectCard.module.scss';

const ProyectCard = ({proyect}) => {
  console.log('proyect:', proyect);

  return ( 
      <Link href={{ pathname: `/proyecto/${proyect.slug}`}}>
        <article className={styles.cardBox}>
          <p>{proyect.descripcion}</p>
          <h2 className={styles.title}>{proyect.entrega}</h2>
        </article>
      </Link>
   );
}
 
export default ProyectCard;