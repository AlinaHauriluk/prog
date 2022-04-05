import {
  CartBodyProductTitle,
  CartBodyProductPhoto,
  CartBodyProductWrapper
} from "./cart-body-product";
import {
  CartListTableItem,
  CartListProductPrice,
} from "../cart-list/cart-list";

interface CartBodyProps {
  product: {
    id: number;
    title: string;
    price: number;
    current: string;
    photo: string;
    count: number;
  };
}

const CartBodyProduct: React.FC<CartBodyProps> = ({ product }) => (
  <>
    <CartListTableItem>
      <CartBodyProductWrapper>
        <CartBodyProductPhoto photo={product.photo} />
        <CartBodyProductTitle>{product.title}</CartBodyProductTitle>
      </CartBodyProductWrapper>
    </CartListTableItem>
    <CartListTableItem>
      <CartListProductPrice>
        {product.price} {product.current}
      </CartListProductPrice>
    </CartListTableItem>
  </>
);

export default CartBodyProduct;
