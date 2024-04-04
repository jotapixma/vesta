import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import Purpose from '../../components/Purpose/Purpose'
import Partners from '../../components/Partners/Partners'
import Support from '../../components/Support/Support'
import Proyects from '../../components/Proyects/Proyects'
import ContactForm from '../../components/ContactForm/ContactForm';
// import styles from '@/styles/Home.module.css'

const Home = () => {
  return ( 
    <>
      <Hero/>
      <Proyects/>
      <Support title="Nuestros Servicios"/>
      {/* <Services title="Servicios"/>
      <Purpose title="Nuestro propósito"/>
      <Partners title="Han confiado en nosotros"/>
      <ContactForm title="Contactános"/> */}
    </>
   );
}
 
export default Home;
