import DefaultLayout from "../../layout/defaultLayout";
import Promo from "../../components/promo";
import CartList from "../../components/cart-list";

const styles = {
  section: {
    height: "460px",
    backgroundImage: `url(${require("../../assets/cartPromoImage.jpg")})`,
    backgroundPosition: 'bottom'
  },
};

const Cart = () => (
  <DefaultLayout>
    <Promo title="Your Cart" style={styles.section} />
    <CartList />
  </DefaultLayout>
);

export default Cart;


