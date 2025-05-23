import { useState } from "react";
import HotBeverages from "./HotBeverages";
import IcedBeverages from "./IcedBeverages";
import ColdBeverages from "./ColdBeverages";

export default function Beverages() {
    const [screen, setScreen] = useState("Hot Beverages");
        
        return (<div className="flex justify-between">
            
            {screen=="Hot Beverages" && <HotBeverages/>}
            {screen=="Iced Beverages" && <IcedBeverages/>}
            {screen=="Cold Beverages" && <ColdBeverages/>}
    
            <aside className="flex flex-col float-end">
                <nav onClick={()=>setScreen("Hot Beverages")} className={screen=="Hot Beverages"?"bg-amber-200":"bg-gray-50"}>Hot Beverages</nav>
                <nav onClick={()=>setScreen("Iced Beverages")} className={screen=="Iced Beverages"?"bg-amber-200":"bg-gray-50"}>Iced Beverages</nav>
                <nav onClick={()=>setScreen("Cold Beverages")} className={screen=="Cold Beverages"?"bg-amber-200":"bg-gray-50"}>Cold Beverages</nav>
            </aside>
        </div>)
}