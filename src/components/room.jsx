import React from "react";
import { Link } from "react-router-dom";
import {BsArrowsFullscreen,BsPeople} from 'react-icons/bs'
const Room = ({room}) => {
    const {id,name,images,size,maxperson,description,price}=room;
    return(
        <div className="bg-white shadow-2xl min-h-[500px] group">
        <div className="overflow-hidden">
            <img  className="group-hover:scale-110 transition-all duration-500 w-full" src={images} alt="" />
        </div>
        <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 rounded-lg flex justify-center items-center uppercase font-sans text-[14px]  tracking-[1px]  text-base font-bold hover:scale-110 ease-out duration-300">
            <div className="flex justify-between w-[50%]">
                <div className="flex items-center gap-x-1">
                    <div className="kja text-red-700">
                        <BsArrowsFullscreen className="text-[18px] "/>
                    </div>
                    <div className="flex gap-x-1">
                        <div className="text-[12px]">SIZE</div>
                        <div className="text-[12px]">{size} m.sq</div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-x-1">
                    <div className="kja text-red-700">
                        <BsPeople className="text-[18px] "/>
                    </div>
                    <div className="flex gap-x-1">
                        <div className="text-[10px]">Max People</div>
                        <div className="text-sm">{maxperson}</div>
                    </div>
                </div>
                </div>
        <div>

        </div>
        <div className="text-center"><Link to={`/room/${id}`}>
        <h3 className=" font-bold uppercase font-serif">{name}</h3>
        </Link>
        <p className="mx-auto max-w-[300px] my-4">{description.slice(0,56)}</p>
        </div>
        <Link to={`/room/${id}`} className="flex items-center justify-center my-10 text-white bg-black font-semibold max-w-[250px] p-1 mx-auto tracking-wide hover:scale-110 ease-out duration-300 rounded-lg ">
            Book now for {price}
        </Link>
        </div>
    )
}

export default Room