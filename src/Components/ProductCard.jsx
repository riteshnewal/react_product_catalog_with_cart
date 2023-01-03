import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";
import { addCartReducer } from "../actions/CartDataActions";
import { productsInventory } from "../store/productInventory";

const ProductCard = ({ data, card }) => {
    const dispatch = useDispatch()

    const [isAdded, setIsAdded] = useState(false);
    const { image, name, price, id } = data;
    const [cartItemInventory, setCartItemInventory] = useState(0)

    const cartItemDetail = useSelector((state) => {
        return state.cartData.cartArray.length !== 0 ? state.cartData.cartArray.find(item => item.id === id) : []
    })

    useEffect(() => {
        cartItemDetail && cartItemDetail.length !== 0 && setCartItemInventory(cartItemDetail)
    }, [cartItemDetail])

    const handleAddToCart = () => {
        // Get inventory detail and match
        let stockCount = productsInventory.find(item => item.id === id)
        if (cartItemInventory && cartItemInventory.quantity && stockCount && stockCount.stock && cartItemInventory.quantity >= stockCount.stock) {
            toast.warn("Out Of Stock!!", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored",
                autoClose: 1000,
            });
        } else {
            const product = { id: id, quantity: 1 };
            dispatch(addCartReducer(product))
            setIsAdded(true);
            setTimeout(() => {
                setIsAdded(false);
            }, 1000);
            toast.success("Item Added to Cart", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored",
                autoClose: 1000,
            });
        }
    };

    return (
        <>
            {/* Grid Card - Can break in component*/}
            <div className={card ? "product" : "product-list"}>
                <div className={card ? "product-image" : "product-list-image"}>
                    <img src={image} alt={name} />
                </div>
                <div className="product-list-text-container">
                    <h4 className={card ? "product-name" : "product-list-name"} >{name}</h4>
                    <p className={card ? "product-price" : "product-list-price"} >{price}</p>
                </div>
                <div className={card ? "product-action" : "product-list-action"}>
                    <button
                        className={!isAdded ? "" : "added"}
                        type="button"
                        onClick={handleAddToCart}
                    >
                        {!isAdded ? "ADD TO CART" : "✔ ADDED"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
