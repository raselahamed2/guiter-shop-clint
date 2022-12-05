import React from 'react';
import { Link } from 'react-router-dom';

const About = ({ data }) => {
    const { name, image } = data
    return (
        <div className="card card-compact w-96 shadow-xl text-yellow-50">
            <figure><Link to='/shop'><img src={image} alt="Shoes" /></Link></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default About;