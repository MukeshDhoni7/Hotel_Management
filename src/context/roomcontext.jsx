import React,{ createContext,useEffect,useState}from "react";
import  { roomData } from '../data'

export const Roomcontext = createContext();
const RoomProvider = ({children}) => {
    const [rooms]= useState(roomData);
    return (
    <Roomcontext.Provider value={{rooms}}>{children}</Roomcontext.Provider>
    );
};

export default RoomProvider









