import DefaultLayout from "../../layout/defaultLayout";
import Promo from "../../components/promo";
import ContactInfo from "../../components/contact-info";
import ContactMap from "../../components/contact-map";

const styles = {
  section: {
    height: '460px',
    backgroundImage: `url(${require("../../assets/contactPromoImage.jpg")})`,
    backgroundPosition: 'top'
  }
}

const Contacts = () => (
  <DefaultLayout>
    <Promo title="Your Cart" style={styles.section}/>
    <ContactInfo />
    <ContactMap />
  </DefaultLayout>
);

export default Contacts
