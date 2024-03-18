import React from 'react';
import Link from 'next/link'
import Image from "next/legacy/image";
import styles from './FooterWinch.module.scss'

const FooterWinch = () => {
  return (  
    <div className={styles.footerWinch}> 
      <div className={styles.footerWinch__info}>
      </div>
      <div className={styles.footerWinch__rights}>
        <span className={styles.textBrand}>Vesta Inmobiliario 2024 © Todos los derechos reservados</span>
      </div>
    </div>
  );
}
 
export default FooterWinch;