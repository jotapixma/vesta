import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from './SupportCard.module.scss';

const SupportCard = ({item}) => {
  const matchesMd = useMediaQuery('(min-width:900px)');

  return (  
    <a href={item.url != '' ? item.url : undefined }>
      <article className={styles.cardBox}>
        <figure className={styles.cardBox__mask}>
          <Image src={item.image} width={1200} height={800} layout="responsive" />
        </figure>
        <h2 className={styles.cardBox__title}>{item.title}</h2>
      </article>
    </a>
  );
}
 
export default SupportCard;