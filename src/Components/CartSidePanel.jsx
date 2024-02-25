
import { useSelector } from "react-redux";

export default function CartSidePanel({totalAmount}) {

    const cart  = useSelector((state) => state.shopslice);

return (
    <div className="flex flex-col justify-between max-h-[90vh] w-[35vw] p-[2rem]">
        <div>
            <h2 className="text-green-400 text-xl">Your Cart</h2>
            <div className="text-green-400 text-2xl font-bold pb-[10px]">Summary</div>
            <p className="text-xl">Total items: {cart.length}</p>
        </div>
        <div>
            <div className="text-xl">
                Total amount: <b>${
                    totalAmount
                }</b>
            </div>
            <button className="w-[95%] bg-green-400 text-white rounded-md p-[.4rem] text-[1rem] font-bold cursor-pointer">Checkout Now</button>
        </div>

    </div>
);
}