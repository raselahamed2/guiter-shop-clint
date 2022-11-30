import React from 'react';

const BookingModal = ({ buyProduct, setBuyProduct }) => {
    const {name} = buyProduct

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const last = form.last.value;

        console.log(last, name, email, phone);

        const booking = {
            booking: name,
            last,
            email,
            phone,
        }
        console.log(booking);
        setBuyProduct(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6">{name}</h3>
                    <form onSubmit={handleBooking}>
                    <input name='name' type="text" placeholder="First Name" className="input input-bordered w-full mb-6" />
                    <input name='last' type="text" placeholder="Last Name" className="input input-bordered w-full mb-6" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full mb-6" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full mb-6" />
                        <input className='btn btn-accent w-full' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;