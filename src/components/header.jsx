import React, { useEffect, useState } from "react";

const Header = () => {
    const [header,setheader] = useState(false);
    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setheader(true) : setheader(false);
        })
    })
    return <header className={`${header ? 'bg bg-amber-300 py-8 shadow-lg font-bold transition duration-500  ': 'bg-transparent py-8 text-white font-bold transition duration-500 '
    } fixed z-50 w-full transition-all `}>
        <div className="container mx-auto flex gap-y-6 flex-col items-center lg:flex-row lg:justify-between lg:gap-y-0">
            <h1 className="text-accent text-2xl">HOTEL MUKESH</h1>
            <nav className={`${header ? 'text-primary' : 'text-white'}flex space-x-4 font-tertiary  lg:space-x-8`}>
                <a href="" className="hover:text-accent transition">Home</a>
                <a href="" className="hover:text-accent transition">Rooms</a>
                <a href="" className="hover:text-accent transition">Restaurant</a>
                <a href="" className="hover:text-accent transition">Contact Us</a>
                <a href="" className="hover:text-accent transition">About Us</a>

            </nav>
            

        </div>
    </header>
}

export default Header