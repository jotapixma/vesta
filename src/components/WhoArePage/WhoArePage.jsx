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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dignissimos nobis nemo unde recusandae harum minus beatae molestias, debitis repellendus repellat ducimus, accusantium architecto! Possimus totam accusamus mollitia, quisquam nisi maxime officia et. Numquam earum nihil architecto ratione eveniet impedit similique nostrum mollitia alias. Laudantium eaque consectetur voluptates eos quam ab ipsam possimus ut mollitia, veritatis suscipit labore eum, incidunt deleniti nulla. Beatae, itaque quis cum quisquam cupiditate dolorum harum quas ad, tempora eos temporibus, necessitatibus porro veritatis odit numquam alias. Libero necessitatibus unde quisquam numquam iure quidem quia eius voluptas veniam sunt! Minima dignissimos blanditiis magnam commodi non quis similique amet, alias facilis earum animi veritatis provident, laboriosam repudiandae ut nostrum! Neque porro eaque dolores suscipit exercitationem dolore repellendus molestias esse mollitia laborum! Delectus enim in, velit voluptatem laudantium fuga sit saepe temporibus pariatur tenetur dolor. Cum, incidunt sapiente? Iste assumenda blanditiis debitis delectus! Voluptatibus, voluptas rem expedita molestias delectus cum blanditiis cumque nam culpa, illo magni id consequatur voluptatem laboriosam harum, quibusdam atque ad quas impedit non dignissimos ab eligendi explicabo. Minima repellat, sunt nemo in voluptate aperiam fugit perferendis esse. Quidem laudantium tempora laboriosam? In id maxime qui nobis. Magni laborum rerum beatae laboriosam! Excepturi, saepe unde?</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam illo dignissimos, consequuntur odio nostrum, ratione porro blanditiis ipsam ipsa sed cupiditate tenetur consequatur quaerat eos voluptatum? Molestias perspiciatis ipsa maiores, tempora voluptatibus veritatis ducimus deserunt, assumenda architecto officia quam nostrum eveniet aut quos deleniti quis quae ratione et praesentium. Excepturi ratione quibusdam quis quaerat suscipit aliquam quas totam nemo cupiditate velit eum ipsum, eos, aut voluptatem iusto doloremque magni quisquam aperiam perspiciatis veniam. Quod, nesciunt! Repudiandae sint accusamus sequi vero, nesciunt explicabo maxime assumenda recusandae excepturi totam architecto reprehenderit consequuntur laborum nihil obcaecati doloremque corporis? Pariatur laudantium porro quos ducimus voluptas est amet incidunt, maxime ut qui rerum consectetur cumque odit. Inventore impedit delectus dolores ducimus quod odit a earum molestias illum? Vel ipsum ullam corporis, ducimus quod omnis inventore blanditiis a suscipit officiis cum eos odio quos deserunt error temporibus quibusdam recusandae repellat laudantium doloremque autem quae. Laborum, ad.</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quaerat sed magnam ullam exercitationem totam nesciunt omnis cupiditate repellendus rem libero itaque optio nostrum dolor esse sit numquam sequi possimus, illum aut? Vero eligendi autem facere quibusdam iusto! Tenetur nihil ab mollitia minus rerum harum fuga commodi exercitationem assumenda. Rerum obcaecati harum cupiditate, voluptas dicta aliquid laboriosam sequi voluptates quibusdam dolor perspiciatis, sed veritatis est assumenda? Deleniti illo, blanditiis perferendis nihil iure consequatur repellat non molestias aperiam eos voluptatum vitae molestiae nobis deserunt minus? Et at, sequi ratione minima eveniet ad quia provident, unde maxime consequatur mollitia neque sit nulla?</p>
        </div>
      </Container>
    </section>
  );
}
 
export default WhoreArePage;