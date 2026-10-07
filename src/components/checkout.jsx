import React,{useState} from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {BsCalendar} from 'react-icons/bs'
import './datepicker.css'


const Checkout = () => {
    const[StartDate, SetStartDate] = useState(false);
    return(
        <div className=" relative flex  items-center justify-center h-full" >
        <div className="absolute z-10 pr-8">
            <div className="">
                <BsCalendar  className="text-accent translate-x-28"/>
            </div>
        </div>
        <DatePicker className="h-full font-bold" selected={StartDate} placeholderText="checkOut"
        onChange={(date) =>SetStartDate(date)}/>
    </div>
    )
}
export default Checkout