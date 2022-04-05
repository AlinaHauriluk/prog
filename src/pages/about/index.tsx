import DefaultLayout from "../../layout/defaultLayout";
import Promo from "../../components/promo";
import Chefs from "../../components/chefs";
import Testimonials from "../../components/testimonials";

const styles = {
  section: {
    height: '460px',
    backgroundImage: `url(${require("../../assets/aboutPromoImage.jpg")})`
  }
}

const About = () => (
  <DefaultLayout>
    <Promo title="About Us" style ={styles.section} />
    <Chefs />
    <Testimonials />
  </DefaultLayout>
);

export default About;
