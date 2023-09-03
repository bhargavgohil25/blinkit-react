import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useActions";
import { selectProductCount } from "../../../state/reducers/selectors/carts";
import { selectProductById } from "../../../state/reducers/selectors/products";
import AddButton from "../../Buttons/AddButton";
import "./CartItem.style.css";
import ItemDetail from "./ItemDetail";

const CartItem = ({ productId }) => {
  const productCount = useSelector((state) =>
    selectProductCount(state, productId)
  );

  const product = useSelector((state) => selectProductById(state, productId));

  const { addProductToCart, removeProductFromCart } = useActions();

  const handleAddClick = useCallback(() => {
    addProductToCart(productId);
  }, [addProductToCart, productId]);

  const handleRemoveClick = useCallback(() => {
    removeProductFromCart(productId);
  }, [removeProductFromCart, productId]);

  return (
    <div className="cart__item">
      <div className="item__img full_width">
        <img src={product.imgSrc} alt={product.productName} />
      </div>
      <ItemDetail product={product} productCount={productCount} />
      <AddButton
        productCount={productCount}
        handleAddClick={handleAddClick}
        handleRemoveClick={handleRemoveClick}
      />
    </div>
  );
};

export default CartItem;
