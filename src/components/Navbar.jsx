import React, { useEffect, useRef } from "react";
import "../assets/styles//Navbar.css"
import NavOptions from "./NavOptions"

export default function Navbar() {
    const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      const navHeight = navRef.current.offsetHeight;
      document.documentElement.style.setProperty("--scroll-padding", `${navHeight + 1}px`);
    }
  }, []);

    const navOptions = [
        {link: "#home", text: "Home"},
        {link: "#about", text: "About us"},
        {link: "#trainers", text: "Trainers"},
        {link: "#pricing", text: "Pricing"},
        {link: "#contact", text: "Contact us"},
    ]

    return (
        <nav ref={navRef}>
            <div className="Navbar d-flex justify-content-between align-items-center w-100">
                <div className="logo fw-bolder">EXTREME FITNESS</div>
                <div className="d-none d-md-flex gap-4 gap-lg-5 align-items-center">
                    {navOptions.map((opt, idx)=>
                        <NavOptions link={opt.link} text={opt.text} key={idx}/>
                    )}
                </div>

                <div className="d-md-none d-block">H</div>
            </div>
        </nav>
    )
}