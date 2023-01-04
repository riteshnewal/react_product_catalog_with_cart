import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { productsList } from "../store/ProductListData";
import CartPreview from "./CartPreview";

const Header = (props) => {
    const [showCart, setShowCart] = useState(false)
    //const [cartItems, setCartItems] = useState([])
    const [cartItemQuantity, setCartItemQuantity] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    const result = useSelector((state) => {
        return state.cartData.cartArray
    })

    useEffect(() => {
        const quantity = result.length !== 0 ? result.map(item => item.quantity).reduce((prev, next) => prev + next) : 0
        let total = 0
        for (let i = 0; i < result.length; i++) {
            let productItem = productsList.find(pItem => pItem.id === result[i].id)
            total += result[i].quantity * productItem.price
        }
        setCartTotal(total)
        setCartItemQuantity(quantity)
    }, [result])

    const handleSearchInput = (event) => {
        // TODO
        toast.info("Search will be available in next version!", {
            position: toast.POSITION.TOP_CENTER,
            theme: "colored",
            autoClose: 1000,
        });
    };

    const handleCartButton = (event) => {
        setShowCart(!showCart)
    };

    return (
        <header>
            <div className="container">
                <div className="brand">
                    <Link to="/">
                        {/* <img
                            className="logo"
                            src="https://blog.grabon.in/wp-content/uploads/2018/08/bigbasket-best-online-shopping-sites-1.jpg"
                            alt="Brand Logo"
                        /> */}
                        <p className="ritesh-title">
                            Ritesh Newal
                        </p>
                        
                    </Link>
                </div>

                <div className="search">
                    <form action="#" method="get" className="search-form">
                        <input
                            type="search"
                            placeholder="Search"
                            className="search-keyword"
                        />
                        <button
                            className="search-button"
                            type="submit"
                            onClick={handleSearchInput}
                        />
                    </form>
                </div>

                <div className="cart">
                    <div className="cart-info">
                        <table>
                            <tbody>
                                <tr>
                                    <td>No. of items</td>
                                    <td>:</td>
                                    <td>
                                        <strong>{cartItemQuantity}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sub Total</td>
                                    <td>:</td>
                                    <td>
                                        <strong>{cartTotal}</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a className="cart-icon" href="#" onClick={handleCartButton} alt="Cart">
                        <img
                            className={props.cartBounce ? "tada" : " "}
                            src={require("../assets/images/bag.png")}
                            alt="Cart"
                        />
                        {cartItemQuantity ? (
                            <span className="cart-count">{cartItemQuantity}</span>
                        ) : (
                            ""
                        )}
                    </a>
                    {showCart && <CartPreview onClose={handleCartButton} cartTotal={cartTotal} />}
                </div>
            </div>
        </header>
    );
};

export default Header;
