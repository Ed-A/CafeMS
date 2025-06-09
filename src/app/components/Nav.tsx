import { useOrder } from "../context/OrderContext";

export default function Nav(props:{name: string}){

    const {mainscreen, setMainScreen} = useOrder();
    const {subscreen, setSubScreen} = useOrder();
    const {setDrink} = useOrder();

    const array = ["Original Blend", "Dark Roast", "Decaf", "Iced Coffee", "Iced Capp", "Frozen Lemonade"];

    const mainMenu = ["Sides", "Beverages", "Breakfast", "Lunch", "Bagels"];

    if(mainMenu.includes(props.name)){
        return <nav onClick={()=>setMainScreen(props.name)} className={mainscreen==props.name?"bg-amber-200":"bg-gray-50"}>{props.name}</nav>
    }else if(!array.includes(props.name)){
        return <nav onClick={()=>setSubScreen(props.name)} className={subscreen==props.name?"bg-amber-200":"bg-gray-50"}>{props.name}</nav>
    }
    return <nav onClick={()=>{setSubScreen("Size"); setDrink(props.name)}} className="bg-gray-50">{props.name}</nav>
}