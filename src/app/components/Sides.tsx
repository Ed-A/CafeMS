"use client";

import { useEffect } from "react";
import Donuts from "./Donuts";
import Muffins from "./Muffins";
import Cookies from "./Cookies";
import Nav from "./Nav";
import { useOrder } from "../context/OrderContext";

export default function Sides() {
    
    const {subscreen, setSubScreen} = useOrder();
    
    useEffect(()=>{
        setSubScreen("Donuts")
    });

    return (<div className="flex justify-between">

        {subscreen=="Donuts" && <Donuts/>}
        {subscreen=="Muffins" && <Muffins/>}
        {subscreen=="Cookies" && <Cookies/>}

        <aside className="flex flex-col float-end">
            <Nav name="Donuts"/>
            <Nav name="Muffins"/>
            <Nav name="Cookies"/>
        </aside>
    </div>)
}