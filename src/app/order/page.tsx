"use client";

import { useEffect, useState } from "react"

import Sides from "../../../components/Sides";
import Breakfast from "../../../components/Breakfast";
import Lunch from "../../../components/Lunch";
import Bagels from "../../../components/Bagels";
import Beverages from "../../../components/Beverages";
import { useOrder } from "../../../context/OrderContext";

export default function Order() {

    const {orders, setOrders} = useOrder();

    const [screen, setScreen] = useState<string>("Beverages");

    return (
        <>
        <h1>Order taking screen</h1>
        <div className="flex">
        <aside className="border-2 w-[30%] h-[600px] flex flex-col">
        <div className="h-[550px] p-2" id="display">
            <ul>
                {orders.map((order, index)=>{
                    return <li key={index}>{order}</li>
                })}
            </ul>
        </div>
        <button className="relative border-2 border-white bg-green-400 w-[100%]">Pay Now</button>
        </aside>
        <div className="border-2 w-[70%] h-[600px]">
          

            <div className="w-[100%] relative text-center mb-8 flex flex-row">
                <nav onClick={()=>setScreen("Sides")} className={screen=="Sides"?"bg-amber-200":"bg-gray-50"}>Sides</nav>
                <nav onClick={()=>setScreen("Beverages")} className={screen=="Beverages"?"bg-amber-200":"bg-gray-50"}>Beverages</nav>
                <nav onClick={()=>setScreen("Breakfast")} className={screen=="Breakfast"?"bg-amber-200":"bg-gray-50"}>Breakfast</nav>
                <nav onClick={()=>setScreen("Lunch")} className={screen=="Lunch"?"bg-amber-200":"bg-gray-50"}>Lunch</nav>
                <nav onClick={()=>setScreen("Bagels")} className={screen=="Bagels"?"bg-amber-200":"bg-gray-50"}>Bagels</nav>
            </div>
            
            {screen=="Sides" && <Sides/>}
            {screen=="Beverages" && <Beverages/>}
            {screen=="Lunch" && <Lunch/>}
            {screen=="Breakfast" && <Breakfast/>}
            {screen=="Bagels" && <Bagels/>}
               
        </div>
        </div>
        </>
    )
}