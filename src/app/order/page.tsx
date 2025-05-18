"use client";

import { useState } from "react"
import './styles.css';

export default function Order() {

    const [orders, setOrders] = useState([]);

    const handleClick = () => {
        
    }

    return (
        <>
        <h1>Order taking screen</h1>
        <div className="flex">
        <aside id="display" className="border-2 w-[30%] h-[600px]">

        </aside>
        <div className="border-2 w-[70%] h-[600px]">
          {/*  <button onClick={handleClick}>Original Blend</button><br></br>
            <button onClick={handleClick}>Dark Roast</button><br></br>
            <button onClick={handleClick}>Decaf</button><br></br>
            <button onClick={handleClick}>Bailey's Coffee</button><br></br>
            <button onClick={handleClick}>Red Coffee</button><br></br>*/}

            <div className="w-[100%]">
                <button onClick={handleClick}>Donuts</button>
                <button onClick={handleClick}>Beverages</button>
                <button onClick={handleClick}>Breakfast</button>
                <button onClick={handleClick}>Lunch</button>
                <button onClick={handleClick}>Bagels</button>
            </div>
            <div className="flex flex-col m-6 space-y-6">
                <button onClick={handleClick}>Original Blend</button>
                <button onClick={handleClick}>Dark Roast</button>
            </div>
               
        </div>
        </div>
        </>
    )
}