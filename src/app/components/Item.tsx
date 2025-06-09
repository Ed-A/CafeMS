import { useOrder } from "../context/OrderContext"
import axios from "axios";

export default function Item(props: {name: string}) {
    
const {orders, setOrders} = useOrder();
const {number, setNumber} = useOrder();
const {drink} = useOrder();

const handleClick = async () => {

    const res = await axios.get('http://localhost:3000/items');
    const data = res.data;
    console.log(data);
    const result = data.find((el:{price: number, items: string[], type: string}) => 
        el.items.includes(props.name) || (el.type == props.name && el.items.includes(drink))
    );
    const price = result?.price;
    const type = result?.type;

    if(type===props.name){
        setOrders([...orders, {"quantity": number, "item": type +" - "+ drink, "price": price}]); 
        setNumber(1);
    }else if(type == undefined){
        setOrders([...orders, {"quantity": number, "item": props.name, "price": price}]); 
        setNumber(1);
    }
    else{
        setOrders([...orders, {"quantity": number, "item": type +" - "+ props.name, "price": price}]); 
        setNumber(1);
    }
}


return (<button onClick={handleClick} >
        {props.name}
    </button>)
}