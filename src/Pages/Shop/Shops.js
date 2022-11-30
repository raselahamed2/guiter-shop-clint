import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal/BookingModal';
import Shop from './Shop';

const Shops = () => {
    const [guiters, setGuiters] = useState([])
    const [buyProduct, setBuyProduct] = useState(null)

    useEffect(() => {
        fetch('guiter.json')
        .then(res => res.json())
        .then(data => setGuiters(data))
    }, [])

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
            {
                guiters.map(guiter => <Shop
                key={guiter._id}
                guiter={guiter}
                setBuyProduct={setBuyProduct}
                ></Shop>)
            }
        </div>
        {
            buyProduct &&
            <BookingModal
            buyProduct={buyProduct}
            setBuyProduct={setBuyProduct}
            ></BookingModal>
        }
        </section>
    );
};

export default Shops;