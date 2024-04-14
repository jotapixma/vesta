import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import Purpose from '../../components/Purpose/Purpose'
import Partners from '../../components/Partners/Partners'
import Support from '../../components/Support/Support'
import Proyects from '../DeliveryTypes/DeliveryTypes'
import ContactModule from '../../components/ContactModule/ContactModule';
// import styles from '@/styles/Home.module.css'

const Home = () => {
  return ( 
    <>
      <Hero/>
      <Support title="Nuestros Servicios"/>
      <ContactModule/>
      {/* <Proyects/> */}
      {/* <Services title="Servicios"/>
      <Purpose title="Nuestro propósito"/>
      <Partners title="Han confiado en nosotros"/> */}
    </>
   );
}
 
export default Home;
