import { useState } from "react";
import Home from "./Home";

function Cart() {
    const [items, setItems] = useState([]);

    const updateCart = (item) => {
        setItems([...items, item]);
    };

    return (
        <>
            <h1 className="text-4xl text-white font-bold">Cart items</h1>
            <div className="min-h-[100px] bg-gray-700 m-2 rounded p-4">
                {items.map((item, index) => (
                    <h1 className="text-1xl font-bold" key={index}>{index+1} : {item}</h1>
                ))}
            </div>
            <h1 className="text-4xl text-white font-bold m-4">Available products</h1>
            <Home update={updateCart} />
        </>
    );
}

export default Cart;
