import { useOrder } from "../context/OrderContext"

export default function Item(props: {name: string}) {
    
const {orders, setOrders} = useOrder();

return (<button onClick={()=>setOrders([...orders, props.name])} >
        {props.name}
    </button>)
}