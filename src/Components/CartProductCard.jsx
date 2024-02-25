import {MdDelete} from "react-icons/md"
import { RemoveToCart } from "../redux/slices/Shopslice";
import { useDispatch } from "react-redux";

export default function CartProductCard({ product }) {
    const dispatch = useDispatch();
    return (
        <div className="max-w-[50vw] flex items-center justify-center gap-[2rem] p-[1rem] flex-col md:flex-row">
            <img className="w-[70%] md:w-[30%] object-cover" src={product.image} alt="img" loading="lazy" />
            <div>
                <h2 className="text-[1rem]">{product.title}</h2>
                <p className="text-[.8rem]">{product.description.substring(0, 60) + "..."}</p>
                <div className="flex justify-between items-center" >
                    <div className="text-green-400 font-bold">${product.price}</div>
                    <div className="text-red-950 bg-pink-400 w-[25px] h-[25px] flex cursor-pointer justify-center items-center rounded-full shadow-[0px_0px_3px_rgb(239,142,142)]" onClick={()=>dispatch(RemoveToCart(product.id))}><MdDelete/></div>
                </div>
            </div>
        </div>
    );
}