import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ buyProduct, setBuyProduct }) => {
    const { name, image } = buyProduct
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const productName = form.productname.value;

        const booking = {
            productName,
            name,
            email,
            phone,
        }
        fetch('https://guiter-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBuyProduct(null)
                    toast.success('Booking Successfull')
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <figure><img className='h-48 w-1/2 mx-auto mb-3' src={image} alt="Shoes" /></figure>
                        <input name='productname' type="text" readOnly defaultValue={name} disabled placeholder="productname" className="input input-bordered w-full mb-6" />
                        <input name='name' type="text" readOnly defaultValue={user?.displayName} disabled placeholder="name" className="input input-bordered w-full mb-6" />
                        <input name='email' type="email" readOnly disabled defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full mb-6" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full mb-6" />
                        <input className='btn btn-accent w-full' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;