"use client";

import { useEffect, useState } from "react"

import Sides from "../components/Sides";
import Breakfast from "../components/Breakfast";
import Lunch from "../components/Lunch";
import Bagels from "../components/Bagels";
import Beverages from "../components/Beverages";
import { useOrder } from "../context/OrderContext";
import NumPad from "../components/NumPad";
import Nav from "../components/Nav";

export default function Order() {

    const {orders, setOrders, mainscreen} = useOrder();

    const [itemIndex, setIndex] = useState(orders.length-1);

    const [total, setTotal] = useState<number>(0);

    useEffect(()=>{
        setIndex(orders.length-1);
        orders.map((order)=>{setTotal((prev)=> prev + (order.price * order.quantity));})
    },[orders.length]);

    const handleClass = (index: number, itemIndex: number) => {

        let classList = "flex justify-between w-full px-2";

        if(itemIndex==index){
            classList += " bg-blue-400 text-black"
        }

        return classList;
    }

    return (
        <>
        <h1>Order taking screen</h1>
        <div className="flex h-full">
        <aside className="border-2 w-[30%] h-[720px] flex flex-col">
        <div className="h-[550px] p-0.5 flex flex-col justify-between overflow-scroll overflow-x-hidden" id="display">
            <ul id="itemList">
                {orders.map((order, index)=>{
                    return <li key={index} onClick={()=>{setIndex(index); }} className={handleClass(index, itemIndex)}> <span>{order.quantity}</span> <span>{order.item}</span> <span>{Math.round(order.price*order.quantity*100)/100}</span></li>
                })}
            </ul>
            <div id="total" className="bg-gray-300 text-black m-0 p-1">
                <p>Sub total<span className="float-right">{total}</span></p>
                <p>Tax<span className="float-right">{Math.round(total*0.13*100)/100}</span></p>
                <p>Total<span className="float-right">{Math.round(total*1.13*100)/100}</span></p>
            </div>
        </div>
        <button className="relative border-2 border-white bg-green-400 w-[100%]">Pay Now</button>
        <div className="flex flex-wrap text-[14px]">
            <button className="bg-yellow-100 w-[45%] h-min" 
                    onClick={()=>setOrders([...orders.slice(0,itemIndex), ...orders.slice(itemIndex+1, orders.length)])}>
                    Void Item
            </button>
            <button className="bg-yellow-100 w-auto h-min" 
                    onClick={()=>{orders.length>=1 && setOrders([...orders, orders[itemIndex]])}}>
                        Repeat Item
            </button>
            <button className="bg-yellow-100 w-[45%] h-min"
                    onClick={()=>{
                        if (orders[itemIndex].quantity>1){
                            setOrders([...orders, {quantity: 1, item: orders[itemIndex].item, price: orders[itemIndex].price}]);
                            orders[itemIndex].quantity--;
                        }
                    }}
            >Split Item</button>
            <button className="bg-red-500 text-white w-[51%] h-"
                    onClick={()=>{}}
                    >CancelOrder
            </button>
        </div>
        </aside>
        <div className="w-[100%]">
            <div className="w-[100%] relative text-center flex flex-row justify-center">
                <Nav name="Sides"/>
                <Nav name="Beverages"/>
                <Nav name="Breakfast"/>
                <Nav name="Lunch"/>
                <Nav name="Bagels"/>
            </div>
            <div className="border-1 w-[100%] h-[80vh] pt-8">
            
            {mainscreen=="Sides" && <Sides/>}
            {mainscreen=="Beverages" && <Beverages/>}
            {mainscreen=="Lunch" && <Lunch/>}
            {mainscreen=="Breakfast" && <Breakfast/>}
            {mainscreen=="Bagels" && <Bagels/>}
               
              <NumPad/>
            
            </div>
        </div>
        </div>
        </>
    )
}