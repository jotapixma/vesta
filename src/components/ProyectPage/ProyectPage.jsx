import React from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { Container } from '@mui/material';
import Image from 'next/image';

const ProyectPage = ({proyect}) => {
  console.log('proyecto X:', proyect);

  return (
    <section>
      <Container>
        <h1>{proyect.delivery}</h1>
        <Grid container spacing={1}>
          {proyect.zones.map((zone) => (
            <Grid item xs={12} md={4}>
              <h2>{zone.name}</h2>
              {zone.projects.map((project) => (
                <article>
                  <Link href={`/proyectos/${proyect.slug}/${project.slug}`}>
                    <h3>{project.title}</h3>
                    <figure>
                      <Image src={project.image} width="1200" height="800" layout="responsive"></Image>
                    </figure> 
                  </Link>
                </article>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
 
export default ProyectPage;