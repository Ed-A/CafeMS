"use client";

import { useState } from "react";
import Donuts from "./Donuts";
import Muffins from "./Muffins";
import Cookies from "./Cookies";

export default function Sides() {
    
    const [screen, setScreen] = useState("Donuts");
    
    return (<div className="flex justify-between">

        {screen=="Donuts" && <Donuts/>}
        {screen=="Muffins" && <Muffins/>}
        {screen=="Cookies" && <Cookies/>}

        <aside className="flex flex-col float-end">
            <nav onClick={()=>setScreen("Donuts")} className={screen=="Donuts"?"bg-amber-200":"bg-gray-50"}>Donuts</nav>
            <nav onClick={()=>setScreen("Muffins")} className={screen=="Muffins"?"bg-amber-200":"bg-gray-50"}>Muffins</nav>
            <nav onClick={()=>setScreen("Cookies")} className={screen=="Cookies"?"bg-amber-200":"bg-gray-50"}>Cookies</nav>
        </aside>
    </div>)
}