import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";
import CartSidePanel from "./CartSidePanel";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export default function Cart(){
    const [totalAmount, setTotalAmount] = useState(0);
    const cart  = useSelector((state) => state.shopslice);
    useEffect(()=>{
        setTotalAmount(cart.reduce((acum,curr)=>{
            return acum + (curr.price);
        },0)) }, [cart]);
    const navigate = useNavigate();
    return (
    <div>
        {
            cart.length === 0 ? (
                <div className="flex flex-col gap-[1.5rem] justify-center items-center max-w-screen min-h-[90vh]">
                    <p className="text-[1.2rem]">Your Cart is empty!</p>
                    <button className="w-[95%] bg-green-500 text-white rounded-md p-[.4rem] text-xl font-bold cursor-pointer" onClick={()=>navigate("/")}>Shop Now</button>
                </div>
            ):
            (
                <div className="flex">
               <div>
                        {
                            cart.map((product)=><div>
                                <CartProductCard key={product.id} product={product}/>
                                <hr/>
                                </div>
                            )
                        }
                    </div>
                    <CartSidePanel totalAmount={ Math.round(totalAmount * 100) / 100}/>
                </div>
            )
        }
    </div>
    );
}