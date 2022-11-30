import React from "react";

const Shop = ({ guiter, setBuyProduct, }) => {
    const {name, image, price} = guiter
    return (
        <div className="card card-compact w-96 text-yellow-50 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <p className="text-yellow-600 font-semibold text-xl">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <label onClick={() => setBuyProduct(guiter)} htmlFor="booking-modal" className="btn  btn-primary">Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default Shop;