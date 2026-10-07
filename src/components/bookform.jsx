import React from "react";
import CheckIn from "./checkin";
import Checkout from "./checkout";
import Adult from "./adult";
import Kids from "./kids";

const Bookform = () => {
    return(
        <form onSubmit={(e)=>e.preventDefault} className="h-[300px] w-full lg:h-[70px]">
            <div className="flex flex-col w-full h-full lg:flex-row">
                <div className="flex-1 border-r"><CheckIn/></div>
                <div className="flex-1 border-r"><Checkout/></div>
                <div className="flex-1 border-r"><Adult/></div>
                <div className="flex-1 border-r"><Kids/></div>
            </div>
        </form>
    )
}

export default Bookform 