import DefaultLayout from "../../layout/defaultLayout";
import Promo from "../../components/promo";
import ProfileMain from "../../components/profile-main";

const styles = {
  section: {
    height: '460px',
    backgroundImage: `url(${require("../../assets/aboutPromoImage.jpg")})`
  }
}

const Profile = () => (
  <DefaultLayout>
    <Promo title="Your Profile" style ={styles.section}  />
    <ProfileMain />
  </DefaultLayout>
);

export default Profile;
