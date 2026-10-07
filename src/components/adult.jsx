import React,{useContext, useState} from "react";
import {Roomcontext} from '../context/roomcontext'
import {BsChevronDown} from 'react-icons/bs'

const list = [
    {name:'1 Adult'},
    {name:'2 Adults'},
    {name:'3 Adults'},
    {name:'4 Adults'},
];






const Adult = () => {
    const [getlist,Setlist] = useState(false);
    return(
        <div className="w-full h-full bg-white relative ">
        <button onMouseOver={()=>Setlist(true)}  onMouseLeave={()=>Setlist(false)}  type="button" className="w-full h-full flex items-center justify-between px-8">Adults
            <BsChevronDown/>
        </button>
        <ul className="bg-white absolute w-full flex flex-col lg:flex-col text-center z-40">
            {list.map((li,index) => {
                return (
                getlist && <ul key={index} onMouseOver={()=>Setlist(true)} onMouseLeave={()=>Setlist(false)} className="border-2 p-1 border-black " >{li.name}</ul>
                );

            })}
        </ul>
        </div>
    );
};
export default Adult