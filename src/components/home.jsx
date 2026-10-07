import React from "react";
import { Link } from "react-router-dom";
import Roomdetails from "./roomdetails";
import Rooms from "./rooms";
import Header from "./header";
import Bookform from "./bookform";
import Slider from "./slider";

const Home = () => {
    return(
        <>
        <Slider/>
        <div className="container mx-auto relative">
            <div className=" bg-orange-100 mt-4 p-4 lg:shadow-xl lg:absolute lg:-top-12
            lg:left-0 lg:right-0 lg:p-0 lg:z-30">
        <Bookform/>
        </div>
        </div>
        <Rooms/>

        </>
    )
}

export default Home