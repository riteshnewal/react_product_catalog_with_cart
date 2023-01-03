import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCartReducer } from "../actions/CartDataActions";
import { productsList } from "../store/ProductListData";

const CartPreview = ({ onClose, cartTotal }) => {
  const dispatch = useDispatch()
  const [cartItems, setCartItems] = useState([])

  const result = useSelector((state) => {
    return state.cartData.cartArray
  })

  useEffect(() => {
    setCartItems(result)
  }, [result])

  const handleClose = () => {
    onClose()
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeCartReducer(productId))
  };


  const handleProceedCheckout = () => {
    //toggleCartPopup(dispatch);
    //history.push("/checkout");
  };

  const getProductDetail = (productId) => {
    return productsList.find(item => item.id === productId)
  }
  const renderItemTile = (product) => {
    const productDetail = getProductDetail(product.id)
    return (
      <li className="cart-item" key={productDetail.name}>
        <img className="product-image" src={productDetail.image} />
        <div className="product-info">
          <p className="product-name">{productDetail.name}</p>
          <p className="product-price">{productDetail.price}</p>
        </div>
        <div className="product-total">
          <p className="quantity">
            {`${product.quantity} ${product.quantity > 1 ? "Nos." : "No."
              }`}
          </p>
          <p className="amount">{product.quantity * productDetail.price}</p>
        </div>
        <button
          className="product-remove"
          onClick={() => handleRemoveItem(productDetail.id)}
        >
          ×
        </button>
      </li>
    );
  }

  return (
    <div className={"cart-preview"}>
      <button
        className="product-remove"
        onClick={handleClose}
      >
        ×
      </button>
      <ul className="cart-items">
        {cartItems.map((product) => {
          return renderItemTile(product)
        })}
      </ul>
      <div className="action-block">
        <button
          type="button"
          onClick={handleProceedCheckout}
        >
          CHECKOUT <b>(Total {cartTotal})</b>
        </button>
      </div>
    </div >
  );
};

export default CartPreview;
