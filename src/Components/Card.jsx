import { useDispatch,useSelector } from "react-redux";
import React from "react";
import { AddToCart, RemoveToCart } from "../redux/slices/Shopslice";
import { useState } from "react";
export default function Card({ product }) {
    const cart = useSelector((state) => state.shopslice);
    const [Hover,sethover] = useState(false);
    const dispatch = useDispatch();
    function RemoveHandler(){
        console.log("removeHandler")
        dispatch(RemoveToCart(product.id));
        console.log(cart);
    }
    function AddHandler(){
        console.log("addHandler")
        dispatch(AddToCart(product));
        console.log(cart);
    }
    function someHandler(p){
        return p.id === product.id;
    }
    return (
        <div className={Hover?"scale-110 w-[220px] sm:w-[300px] p-[.7rem] gap-[10px] shadow-[0px_0px_14px_black] rounded-xl text-black bg-white":" w-[220px] sm:w-[300px]  p-[.7rem] gap-[10px] shadow-[0px_0px_14px_black] rounded-xl text-black bg-white"} onMouseOver={()=>sethover(true)} onMouseOut={()=>sethover(false)}>
            <div className="w-full flex flex-col gap-[10px] p-[1rem]">
                <div className="flex items-baseline">
                    <h2 className="text-[1.1rem] h-[1.1rem]">{product?.title?.substring(0, 13)}</h2>
                    <span>...</span>
                </div>
                <p className="text-[.8rem]">{product?.description?.substring(0, 65) + "..."}</p>
                <img className="w-[90%] aspect-square" src={product?.image} alt="img" loading="lazy" />
            </div>
            <div className="flex justify-between items-center">
                <div className="text-green-400 font-bold">${product?.price}</div>
                {   cart == null ? <button className="border-2 border-black px-2 py-1 rounded-2xl cursor-pointer text-black" onClick={AddHandler}>Add To Cart</button>:(
                    cart.some(someHandler) ? 
                    <button className="border-2 border-black px-2 py-1 rounded-2xl cursor-pointer text-black" onClick={RemoveHandler}>Remove To Cart</button> 
                    :<button className="border-2 border-black px-2 py-1 rounded-2xl cursor-pointer text-black" onClick={AddHandler}>Add To Cart</button>)
                }
            </div>
        </div>
    );
}