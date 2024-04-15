import Container from "@mui/material/Container";
import ContactForm from "../ContactForm/ContactForm";
import styles from './ContactModule.module.scss';

const ContactModule = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactContainer}>
        <Container>
          <div className="title-container" style={{ marginBottom: '24px'}}>
            <h1 className="title">Contáctanos</h1>
            <p>Contáctanos para conocer más acerca de nuestros proyectos inmobiliarios</p>
          </div>
          <div className="bootstrap-container">
            <ContactForm/>
          </div>
        </Container>
      </div>
    </section>
  );
}
 
export default ContactModule;