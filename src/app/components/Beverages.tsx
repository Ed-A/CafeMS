import HotBeverages from "./HotBeverages";
import IcedBeverages from "./IcedBeverages";
import ColdBeverages from "./ColdBeverages";
import { useOrder } from "../context/OrderContext";
import Nav from "./Nav";
import Size from "./Size";
import { useEffect } from "react";

export default function Beverages() {
    const {subscreen, setSubScreen} = useOrder();
        
    useEffect(()=>{
        setSubScreen("Hot Beverages")
    });

        return (<div className="flex justify-between">
            
            {subscreen=="Hot Beverages" && <HotBeverages/>}
            {subscreen=="Iced Beverages" && <IcedBeverages/>}
            {subscreen=="Cold Beverages" && <ColdBeverages/>}
            {subscreen=="Size" && <Size/>}
    
            <aside className="flex flex-col float-end">
                <Nav name="Hot Beverages"/>
                <Nav name="Iced Beverages"/>
                <Nav name="Cold Beverages"/>
            </aside>
        </div>)
}