import type { FC } from "react";
import { CartHeadTitle } from "./cart-head";

interface CartHeadProps {
  cartHead: Array<{ id: number; title: string }>;
}

const CartHead: FC<CartHeadProps> = ({ cartHead }) => (
  <>
    {cartHead.map((headTitle) => (
      <CartHeadTitle key={headTitle.id}>{headTitle.title}</CartHeadTitle>
    ))}
  </>
);

export default CartHead;
