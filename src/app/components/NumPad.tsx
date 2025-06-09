import { useOrder } from "../context/OrderContext"
import Number from "./Number";

export default function NumPad(){

    const {number} = useOrder();

    return (<div className="w-[200px]">
        <div className="border-[1px] border-white text-right pr-2 w-[150px]">{number}</div>
        <Number number={1}/>
        <Number number={2}/>
        <Number number={3}/>
        <Number number={4}/>
        <Number number={5}/>
        <Number number={6}/>
        <Number number={7}/>
        <Number number={8}/>
        <Number number={9}/>
        <Number number={0}/>
        <button></button>
    </div>
    )
}