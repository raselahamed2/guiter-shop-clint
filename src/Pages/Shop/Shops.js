import React, { useEffect, useState } from 'react';
import Shop from './Shop';

const Shops = () => {
    const [guiters, setGuiters] = useState([])

    useEffect(() => {
        fetch('guiter.json')
        .then(res => res.json())
        .then(data => setGuiters(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
            {
                guiters.map(guiter => <Shop
                key={guiter._id}
                guiter={guiter}
                ></Shop>)
            }
        </div>
    );
};

export default Shops;