import React from 'react';

const BannerCard = ({ card }) => {
    const {name, bgClass, icon, description} = card
    return (
        <div >
            <div className={`card  md:card-side shadow-xl p-6 ${bgClass}`}>
                <figure>
                    <img src={icon} alt="Movie" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;