"use client";

import { useState } from "react"
import './styles.css';
import Donuts from "../../../components/Donuts";
import Breakfast from "../../../components/Breakfast";
import Lunch from "../../../components/Lunch";
import Bagels from "../../../components/Bagels";
import Beverages from "../../../components/Beverages";

export default function Order() {

    const [orders, setOrders] = useState([]);

    const [screen, setScreen] = useState("Beverages");

    const handleClick = () => {
        
    }

    return (
        <>
        <h1>Order taking screen</h1>
        <div className="flex">
        <aside id="display" className="border-2 w-[30%] h-[600px]">

        </aside>
        <div className="border-2 w-[70%] h-[600px]">
          

            <div className="w-[100%]">
                <button onClick={()=>setScreen("Donuts")}>Donuts</button>
                <button onClick={()=>setScreen("Beverages")}>Beverages</button>
                <button onClick={()=>setScreen("Breakfast")}>Breakfast</button>
                <button onClick={()=>setScreen("Lunch")}>Lunch</button>
                <button onClick={()=>setScreen("Bagels")}>Bagels</button>
            </div>
            
            {screen=="Donuts" && <Donuts/>}
            {screen=="Beverages" && <Beverages/>}
            {screen=="Lunch" && <Lunch/>}
            {screen=="Breakfast" && <Breakfast/>}
            {screen=="Bagels" && <Bagels/>}
               
        </div>
        </div>
        </>
    )
}