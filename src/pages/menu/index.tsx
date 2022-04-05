import DefaultLayout from "../../layout/defaultLayout";
import Promo from "../../components/promo";
import MenuDishes from "../../components/menu-dishes";
import MenuList from "../../components/menu-list";
import NewDishes from "../../components/new-dishes";

const styles = {
  section: {
    height: '460px',
    backgroundImage: `url(${require("../../assets/menuPromoImage.jpg")})`,
    backgroundPosition: 'bottom'
  }
}

const Menu = () => (
  <DefaultLayout>
    <Promo title="Our Menu" style={styles.section} />
    <MenuDishes />
    <MenuList />
    <NewDishes />
  </DefaultLayout>
);

export default Menu;
