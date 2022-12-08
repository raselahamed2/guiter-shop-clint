import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Sheard/Loading/Loading';
import BookingModal from './BookingModal/BookingModal';
import Shop from './Shop';

const Shops = () => {
    const [buyProduct, setBuyProduct] = useState(null)

    const { data: guiters, isLoading } = useQuery({
        queryKey: ['guiter'],
        queryFn: async () => {
            const res = await fetch('https://guiter-server.vercel.app/guiter')
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    guiters?.length && guiters?.map(guiter => <Shop
                        key={guiter._id}
                        guiter={guiter}
                        setBuyProduct={setBuyProduct}
                    ></Shop>)
                }
            </div>
            {
                buyProduct &&
                <BookingModal
                    guiter={guiters}
                    buyProduct={buyProduct}
                    setBuyProduct={setBuyProduct}
                ></BookingModal>
            }
        </section>
    );
};

export default Shops;