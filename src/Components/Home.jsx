import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { productsList } from "../store/ProductListData";

const Home = () => {
    const _productsList = productsList
    const [isGridView, setIsGridView] = useState(true)

    const viewHandler = () => {
        setIsGridView(!isGridView)
    }

    return (
        <>
            <div className="products-wrapper">
                <span className="grid-list-view-container">
                    {!isGridView && <img onClick={viewHandler} className="grid-list-view" src={"https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/300x/1b89f2fc96fc819c2a7e15c7e545e8a9/6/2/626.7-grid-view-icon-iconbunny.jpg"} alt={"Grid View"} />}
                    {isGridView && <img onClick={viewHandler} className="grid-list-view" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ6kTqMbP8WxYbHH_2Z18PgCSRiM93jv7NCiyWANMLmp5xnq2hH8K2Z9RZsV37u965t-k&usqp=CAU"} alt={"List View"} />}
                </span>
                {isGridView && <div className={"products"}>
                    {
                        _productsList.map((data) => {
                            return <ProductCard key={data.id} data={data} card={true} />;
                        })}
                </div>}
                {!isGridView && <div className="products-list">
                    {
                        _productsList.map((data) => {
                            return <ProductCard key={data.id} data={data} card={false} />;
                        })}
                </div>}
            </div>
        </>
    );
};

export default Home;
