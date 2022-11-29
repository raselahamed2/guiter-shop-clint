import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/03/electric-guitar-player-playing-hard-rock-music-with-bass-guitar-on-stage-e1648447565407-1024x683.jpg")` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-neutral-content">
                    <div className="">
                        <p>New Release Guitars 2022</p>
                        <h1 className="mb-5 text-5xl font-bold ">Guiter News Series <br /> <span className='text-amber-400'>Paul Timmons</span> <br /> Signature</h1>
                        <p className=" text-white">Donec quam felis, ultricies nec, pellentesque eu,</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;