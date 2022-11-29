import React from 'react';
import clock from '../../../assetes/icon/clock.svg'
import marker from '../../../assetes/icon/marker.svg'
import phone from '../../../assetes/icon/phone.svg'
import BannerCard from './BannerCard';

const InfoCard = () => {
    const cardData = [
        {
            id: 1,
            name: 'Music Times',
            description: 'Open 11.00 am to 12.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'My Locations',
            description: 'Comilla Choddugram',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            icon: phone,
            description: '+880 1609523761',
            bgClass: 'bg-gradient-to-r from-primary to-secondary'

        }
    ]
    return (
        <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white'>
            {
                cardData.map(card => <BannerCard
                key={card.id}
                card={card}
                ></BannerCard>)
            }
        </div>
    );
};

export default InfoCard;