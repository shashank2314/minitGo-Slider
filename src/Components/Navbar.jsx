import { useNavigate } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Navbar(){
    const cart = useSelector((state) => state.shopslice);
    const navigate = useNavigate();
    return (
    <div className="w-screen p-[.7rem] flex items-center justify-around bg-black text-white">
        <div onClick={()=>navigate("/")} className="text-blue-300 font-bold text-lg cursor-pointer">MinitGo</div>
        <div className="w-[20%] flex items-center justify-evenly text-[1.3rem]">
            <div onClick={()=>navigate("/")} className="cursor-pointer">Home</div>
            <div onClick={()=>navigate("/cart")} className="relative cursor-pointer">
                <div className="text-3xl">
                    <AiOutlineShoppingCart/>
                </div>
                <span className="absolute bg-green-400 w-[1.3rem] h-[1.3rem] text-[.9rem] aspect-square rounded-full -top-[3px] -right-[6px] animate-bounce flex align-middle justify-center">
                    {cart.length}
                    </span>
                </div>
        </div>
    </div>
    );
}