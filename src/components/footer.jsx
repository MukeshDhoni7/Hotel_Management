import React from "react";
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return(
        <footer className="bg-black py-6">footer
        <div className="flex ">
          <div className="container mx-auto text-white">
            <div className="flex w-full h-full flex-row">
              <div className="h-full w-[30%]">
            <h1 className="text-white">Copyrights@2023</h1>
            </div>
            </div>           
          </div>
          <div className="container mx-auto text-white flex justify-end">
            <div className="flex flex-row h-full w-full justify-end ">
              <div className="h-full flex w-[80%] lg:justify-end lg:space-x-8 space-x-4 cursor-pointer">
                <h1>Contact Us</h1>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
              </div>
            </div>
          </div>
          </div>
    
        </footer>
    )
}

export default Footer