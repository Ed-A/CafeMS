import { useOrder } from "../context/OrderContext"

export default function Number(props: {number: number}){

    const {setNumber} = useOrder();

    return (<>
            <button onClick={()=>setNumber((prev)=>prev*10+props.number)} className="bg-amber-50 rounded">{props.number}</button>
        </>)
}