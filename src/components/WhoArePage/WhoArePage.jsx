import Container from "@mui/material/Container";
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import styles from './WhoArePage.module.scss';

const WhoreArePage = () => {
  return (  
    <section className={styles.section}>
      <Container>
        <div className="blog-container">
          <div className="title-container" style={{ marginBottom: '24px'}}>
            <h1 className="title">Quiénes Somos</h1>
          </div>
          <figure className={styles.mask}>
            <Image src="/proposito.webp" width={1200} height={800} layout="responsive" />
          </figure>
          <p>Pablo, con sus siete años de experiencia como ingeniero civil en Chile, aporta un bagaje único a la mesa de Vesta proyecto inmobiliario. Criado en Venezuela, donde trabajó codo a codo con su padre, un respetado ingeniero civil, Pablo trae consigo una rica herencia de conocimientos y habilidades en la construcción. Su enfoque meticuloso y su pasión por la ingeniería son evidentes en cada proyecto en el que se involucra. Su experiencia internacional agrega una perspectiva única a la colaboración, lo que le permite anticipar desafíos y proponer soluciones innovadoras.</p>

          <p>Alba, la pareja de Pablo y una talentosa corredora inmobiliaria con cuatro años de experiencia en el mercado chileno, complementa perfectamente el equipo de Vesta proyecto inmobiliario. Su profundo conocimiento del mercado local, combinado con su habilidad para establecer relaciones sólidas con los clientes, es invaluable para el éxito del proyecto. Alba aporta una energía contagiosa y una visión estratégica que inspira confianza tanto en sus colegas como en los clientes. Su capacidad para identificar oportunidades y adaptarse a las cambiantes condiciones del mercado asegura que Vesta se mantenga a la vanguardia de la industria inmobiliaria.</p>

          <p>Felipe, el antiguo empleador de Pablo y un experimentado ingeniero con dieciséis años de experiencia en el sector de la construcción, aporta una perspectiva invaluable al equipo de Vesta proyecto inmobiliario. Su profundo conocimiento técnico y su experiencia en la gestión de proyectos complejos son activos invaluables para el éxito de la empresa. La decisión de asociarse con Pablo y Alba demuestra su confianza en su capacidad para llevar a cabo proyectos innovadores y de alta calidad. Con la combinación de talento, experiencia y visión de futuro que aporta este trío, Vesta proyecto inmobiliario está bien posicionado para alcanzar nuevas alturas en el mercado inmobiliario chileno.</p>
        </div>
      </Container>
    </section>
  );
}
 
export default WhoreArePage;