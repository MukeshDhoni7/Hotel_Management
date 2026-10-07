import React,{useContext} from "react";
import { Roomcontext } from "../context/roomcontext";
import {BsChevronDown} from 'react-icons/bs'

const list = [
    {name:'1 kid'},
    {name:'2 kids'},
    {name:'3 kids'},
    {name:'4 kids'},
    
];

const Kids = () => {
    return(
        <div className="w-full h-full bg-white relative">
            <button type="button" className="w-full h-full flex items-center justify-between px-8">Kids
                <BsChevronDown/>
            </button>
            <ul className=" bg-white absolute w-full  flex flex-col lg:flex-row z-40">
                {list.map((li,index)=>{
                    return(
                        <ul key={index}onChange={list}></ul>
                    );
                })}
            </ul>
        </div>
    )
}
export default Kids