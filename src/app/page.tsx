import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>Hamro Cafe</h1>
      <div className="border-2 border-white w-[80%] h-[200px] flex relative p-2">
        
        <Link className="border-2 border-white w-auto h-min left-[20%] relative hover:border-red-800 hover:cursor-pointer mr-[10%] p-2" href="/order">Order Taking</Link>
    

        <Link className="border-2 border-white w-auto h-min left-[20%] relative hover:border-red-800 hover:cursor-pointer p-2" href="/drink">
          Drinks Screen
        </Link>

        <Link className="border-2 border-white w-auto h-min hover:border-red-800 hover:cursor-pointer bottom-0 absolute left-[20%] p-2 mb-2" href="/food">
          Food Station
        </Link>
      </div>
    </div>
  );
}
