"use client";

import { useState } from "react";
import Cart from "./Cart";
// import Hero from "./Hero";
import Navbar from "./Navbar";

interface PropsType extends React.PropsWithChildren{

}
 export const NavbarCartWrapper = () => {
    const [showCart, setShowCart] = useState(false)

    return (
        <>
        <Navbar setShowCart={setShowCart} />
        {showCart?  <Cart setShowCart={setShowCart}  /> : null}
        </>
    )

}