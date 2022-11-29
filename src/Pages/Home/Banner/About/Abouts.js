import React from 'react';
import About from './About';

const Abouts = () => {
    const cardData = [
        {
            id: 1,
            name: 'RZ Red Zeppelin',
            image: "https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/03/white-simple-guitars-1-oxMhZ1cQAIg.jpg",
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            image: "https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/03/red-guitars-jbanez-PNUPBFU.jpg",
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'ZW Black Jbanez',
            image: "https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/03/Hendric-signature-CVCH4cdf2wo.jpg",
            bgClass: 'bg-gradient-to-r from-primary to-secondary'

        }
    ]
    return (
        <div>
            <h1 className="font-bold text-xl text-yellow-50 text-center mt-10">Our Product</h1>
            <h1 className='text-center font-bold text-cyan-100 text-5xl mt-3'> <span className='text-yellow-500'>Best Seller</span> Guitars</h1>
            <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28'>
            {
                    cardData.map(data => <About
                    key={data.id}
                    data={data}
                    ></About>)
                }
            </div>
        </div>
    );
};

export default Abouts;