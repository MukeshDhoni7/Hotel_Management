import React,{useContext} from "react";
import { useParams } from 'react-router-dom'
import { FaBath,FaCoffee,FaCocktail,FaSwimmingPool,FaHotdog,FaStopwatch } from "react-icons/fa";
import Adult from "./adult";
import Checkout from "./checkout";
import CheckIn from "./checkin";
import Kids from "./kids";
import { Roomcontext } from "../context/roomcontext";
import {FaCheck} from 'react-icons/fa'




const Roomdetails= () => {
    const {rooms} = useContext(Roomcontext);
    const {id} = useParams();
    console.log(id);

    const room = rooms.find((room) => {
        return room.id === Number(id);
    });
    console.log(room);

    const {name,description,images,price} = room;
    return(
        <section>
            <div className="bg-room bg-cover bg-center h-[560px] relative flex items-center justify-center">
                <div className="bg-black/70 w-full h-full  absolute"></div>
                <h1 className="text-6xl font-primary  text-white text-center z-20">{name} Details</h1>
            </div>
                <div className="flex flex-col lg:flex-row py-28">
                    <div className="w-full h-full lg:w-[60%] px-6 text-center">
                        <h1 className="h2">{name}</h1>
                        <p>{description}</p>
                        <img src={images} alt="" />
                        <div className="mt-10 text-center">
                            <h1 className="h2 mb-3">Room Facilities</h1>
                            <p className="mb-12 text-accent h3">Available Facilities</p>
                        </div>
                        <div  className=" text-center text-accent  gap-y-6  grid-cols-3 grid">
                            <div className="flex items-center gap-x-6">
                                <div className="text-3xl"><FaBath/></div>
                                <div>Bath</div>
                            </div>
                            <div className="flex items-center gap-x-6">
                                <div className="text-3xl"><FaStopwatch/></div>
                                <div>Gym</div>
                            </div>
                            <div className="flex items-center gap-x-6">
                                <div className="text-3xl"><FaHotdog/></div>
                                <div>Food</div>
                            </div>
                            <div className="flex items-center gap-x-6">
                                <div className="text-3xl"><FaCoffee/></div>
                                <div>Coffee</div>
                            </div>
                            <div className="flex items-center gap-x-6">
                                <div className="text-3xl"><FaCocktail/></div>
                                <div>Drinks</div>
                            </div>
                            <div className="flex items-center gap-x-6">
                                <div className="text-3xl"><FaSwimmingPool/></div>
                                <div>Swimming Pool</div>
                            </div>
                        </div>

                    </div>
                    <div className="w-full h-full  lg:w-[40%] ">
                        <div className=" mb-10 mt-[105px] px-6 bg-accent/20  flex items-center justify-center ">
                            <div className="flex flex-col space-y-4 mb-4">
                                <h3 className="text-center text-2xl font-bold mb-4">Your Reservation</h3>
                                <div className="h-[60px]"><CheckIn/></div>
                                <div className="h-[60px]"><Checkout/></div>
                                <div className="h-[60px]"><Kids/></div>
                                <div className="h-[60px]"><Adult/></div>
                                <div className="mx-auto bg-accent w-[250px] rounded-lg text-center hover:bg-black duration-500 scale-110 hover:text-accent font-bold"><button className="h-[30px]">Check Now</button></div>
                            </div>
                        </div>
                  
                        
                    </div>
                </div>
        </section>
    )
}

export default Roomdetails