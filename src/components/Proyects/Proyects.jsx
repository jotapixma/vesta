import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import styles from './Proyects.module.css';

const datosZonas = [
  {
    entrega: "Entrega Inmediata",
    zonas: [
      {
        nombre: "zona oriente",
        zone_id: 1,
        data: {
          uf_min: "100",
          titulo: "Proyecto Oriente Inmediato",
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla odio nec quam volutpat, sit amet lobortis arcu ullamcorper.",
          title_2: "Oriente se reinventa",
          descripcion_2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          images: [
            { image: "url_de_imagen_orient_1.jpg", alt: "Imagen 1" },
            { image: "url_de_imagen_orient_2.jpg", alt: "Imagen 2" }
          ],
          precios: { title: "Precios", descripcion: "Desde $100,000,000 CLP" },
          tipologias: { title: "Tipologías", descripcion: "Apartamentos de 2 y 3 dormitorios" },
          condiciones_comerciales: { title: "Condiciones Comerciales", descripcion: "Descuento del 5% por pago al contado" },
          espacios_comunes: { title: "Espacios Comunes", descripcion: "Piscina, gimnasio, áreas verdes" },
          construccion: { title: "Construcción", descripcion: "En construcción" },
          proyecto: { title: "Proyecto", descripcion: "Entrega inmediata, últimas unidades disponibles" }
        }
      },
      {
        nombre: "zona sur",
        zone_id: 2,
        data: {
          uf_min: "150",
          titulo: "Proyecto Sur Inmediato",
          descripcion: "Descripción de proyecto en la zona sur de entrega inmediata.",
          title_2: "Nuevo título sur",
          descripcion_2: "Descripción adicional del proyecto en la zona sur.",
          images: [
            { image: "url_de_imagen_sur_1.jpg", alt: "Imagen 1" },
            { image: "url_de_imagen_sur_2.jpg", alt: "Imagen 2" }
          ],
          precios: { title: "Precios", descripcion: "Desde $150,000,000 CLP" },
          tipologias: { title: "Tipologías", descripcion: "Casas de 3 y 4 dormitorios" },
          condiciones_comerciales: { title: "Condiciones Comerciales", descripcion: "Financiamiento disponible" },
          espacios_comunes: { title: "Espacios Comunes", descripcion: "Club house, juegos infantiles" },
          construccion: { title: "Construcción", descripcion: "En construcción" },
          proyecto: { title: "Proyecto", descripcion: "Entrega inmediata, reserva ya tu vivienda" }
        }
      },
      {
        nombre: "zona centro",
        zone_id: 3,
        data: {
          uf_min: "120",
          titulo: "Proyecto Centro Inmediato",
          descripcion: "Descripción de proyecto en la zona centro de entrega inmediata.",
          title_2: "Nuevo título centro",
          descripcion_2: "Descripción adicional del proyecto en la zona centro.",
          images: [
            { image: "url_de_imagen_centro_1.jpg", alt: "Imagen 1" },
            { image: "url_de_imagen_centro_2.jpg", alt: "Imagen 2" }
          ],
          precios: { title: "Precios", descripcion: "Desde $120,000,000 CLP" },
          tipologias: { title: "Tipologías", descripcion: "Departamentos de 1 y 2 dormitorios" },
          condiciones_comerciales: { title: "Condiciones Comerciales", descripcion: "Cuotas sin interés por 12 meses" },
          espacios_comunes: { title: "Espacios Comunes", descripcion: "Salón de eventos, quincho" },
          construccion: { title: "Construcción", descripcion: "En construcción" },
          proyecto: { title: "Proyecto", descripcion: "Entrega inmediata, excelente ubicación" }
        }
      },
      {
        nombre: "zona norte",
        zone_id: 4,
        data: {
          uf_min: "180",
          titulo: "Proyecto Norte Inmediato",
          descripcion: "Descripción de proyecto en la zona norte de entrega inmediata.",
          title_2: "Nuevo título norte",
          descripcion_2: "Descripción adicional del proyecto en la zona norte.",
          images: [
            { image: "url_de_imagen_norte_1.jpg", alt: "Imagen 1" },
            { image: "url_de_imagen_norte_2.jpg", alt: "Imagen 2" }
          ],
          precios: { title: "Precios", descripcion: "Desde $180,000,000 CLP" },
          tipologias: { title: "Tipologías", descripcion: "Departamentos de 3 y 4 dormitorios" },
          condiciones_comerciales: { title: "Condiciones Comerciales", descripcion: "Descuento especial por pago al contado" },
          espacios_comunes: { title: "Espacios Comunes", descripcion: "Piscina climatizada, sala de cine" },
          construccion: { title: "Construcción", descripcion: "En construcción" },
          proyecto: { title: "Proyecto", descripcion: "Entrega inmediata, financiamiento disponible" }
        }
      }
    ]
  },
  {
    entrega: "Entrega Futura",
    zonas: [
      {
        nombre: "zona oriente",
        zone_id: 1,
        data: {
          uf_min: "90",
          titulo: "Proyecto Oriente Futuro",
          descripcion: "Descripción de proyecto en la zona oriente de entrega futura.",
          title_2: "Nuevo título oriente",
          descripcion_2: "Descripción adicional del proyecto en la zona oriente.",
          images: [
            { image: "url_de_imagen_futuro_orient_1.jpg", alt: "Imagen 1" },
            { image: "url_de_imagen_futuro_orient_2.jpg", alt: "Imagen 2" }
          ],
          precios: { title: "Precios", descripcion: "Desde $90,000,000 CLP" },
          tipologias: { title: "Tipologías", descripcion: "Departamentos de lujo" },
          condiciones_comerciales: { title: "Condiciones Comerciales", descripcion: "Reserva con $10,000,000 CLP" },
          espacios_comunes: { title: "Espacios Comunes", descripcion: "Spa, terraza panorámica" },
          construccion: { title: "Construcción", descripcion: "Preventa" },
          proyecto: { title: "Proyecto", descripcion: "Entrega en 2 años, reserva ya" }
        }
      },
      {
        nombre: "zona sur",
        zone_id: 2,
        data: {
          uf_min: "120",
          titulo: "Proyecto Sur Futuro",
          descripcion: "Descripción de proyecto en la zona sur de entrega futura.",
          title_2: "Nuevo título futuro sur",
          descripcion_2: "Descripción adicional del proyecto en la zona sur.",
          images: [
            { image: "url_de_imagen_futuro_sur_1.jpg", alt: "Imagen 1" },
            { image: "url_de_imagen_futuro_sur_2.jpg", alt: "Imagen 2" }
          ],
          precios: { title: "Precios", descripcion: "Desde $120,000,000 CLP" },
          tipologias: { title: "Tipologías", descripcion: "Casas ecológicas" },
          condiciones_comerciales: { title: "Condiciones Comerciales", descripcion: "Financiamiento a largo plazo" },
          espacios_comunes: { title: "Espacios Comunes", descripcion: "Parques, senderos" },
          construccion: { title: "Construcción", descripcion: "En planificación" },
          proyecto: { title: "Proyecto", descripcion: "Entrega en 3 años, reserva ya" }
        }
      },
      {
        nombre: "zona centro",
        zone_id: 3,
        data: {
          uf_min: "80",
          titulo: "Proyecto Centro Futuro",
          descripcion: "Descripción de proyecto en la zona centro de entrega futura.",
          title_2: "Nuevo título futuro centro",
          descripcion_2: "Descripción adicional del proyecto en la zona centro.",
          images: [
            { image: "url_de_imagen_futuro_centro_1.jpg", alt: "Imagen 1" },
            { image: "url_de_imagen_futuro_centro_2.jpg", alt: "Imagen 2" }
          ],
          precios: { title: "Precios", descripcion: "Desde $80,000,000 CLP" },
          tipologias: { title: "Tipologías", descripcion: "Lofts y estudios" },
          condiciones_comerciales: { title: "Condiciones Comerciales", descripcion: "Financiamiento flexible" },
          espacios_comunes: { title: "Espacios Comunes", descripcion: "Gimnasio, área de coworking" },
          construccion: { title: "Construcción", descripcion: "En preconstrucción" },
          proyecto: { title: "Proyecto", descripcion: "Entrega en 2 años, reserva ya" }
        }
      },
      {
        nombre: "zona norte",
        zone_id: 4,
        data: {
          uf_min: "100",
          titulo: "Proyecto Norte Futuro",
          descripcion: "Descripción de proyecto en la zona norte de entrega futura.",
          title_2: "Nuevo título futuro norte",
          descripcion_2: "Descripción adicional del proyecto en la zona norte.",
          images: [
            { image: "url_de_imagen_futuro_norte_1.jpg", alt: "Imagen 1" },
            { image: "url_de_imagen_futuro_norte_2.jpg", alt: "Imagen 2" }
          ],
          precios: { title: "Precios", descripcion: "Desde $100,000,000 CLP" },
          tipologias: { title: "Tipologías", descripcion: "Apartamentos familiares" },
          condiciones_comerciales: { title: "Condiciones Comerciales", descripcion: "Financiamiento disponible" },
          espacios_comunes: { title: "Espacios Comunes", descripcion: "Áreas recreativas, piscina" },
          construccion: { title: "Construcción", descripcion: "En planificación" },
          proyecto: { title: "Proyecto", descripcion: "Entrega en 3 años, reserva ya" }
        }
      }
    ]
  }
];

console.log(datosZonas);


const Proyects = () => {
  return (  
    <section className={styles.section}>
      <Container>
        <h2>Proyectos</h2>
      </Container>
    </section>
  );
}
 
export default Proyects;