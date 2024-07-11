"use client";

import { useState } from "react";
import Cart from "./Cart";
import Feature from "./Feature";
import Hero from "./Hero";
import Navbar from "./Navbar";

interface PropsType extends React.PropsWithChildren{

}
 export const NavbarCartWrapper = (props:PropsType) => {
    const [showCart, setShowCart] = useState(false)

    return (
        <>
        <Navbar setShowCart={setShowCart} />
        {showCart && <Cart setShowCart={setShowCart} />}
        <Hero />
        <Feature/>
        </>
    )

}