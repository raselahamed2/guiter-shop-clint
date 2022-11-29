import React from 'react';

const GuiterMan = () => {
    return (
        <div className="hero bg-dark mb-24">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/04/fashionable-female-teenager-playing-electric-guitar-at-home-800x533.jpg" alt='' className="max-w-xl rounded-lg shadow-2xl" />
                <div className='text-yellow-50 ml-10'>
                    <h1 className="text-5xl font-bold"><span className='text-yellow-600'>Red Classic</span> Jbanez</h1>
                    <p className="py-6">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default GuiterMan;