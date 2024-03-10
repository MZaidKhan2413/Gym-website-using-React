import "./Navbar.css"
import NavOptions from "./NavOptions"

export default function Navbar() {

    const navOptions = [
        {link: "#home", text: "Home"},
        {link: "#about", text: "About us"},
        {link: "#trainers", text: "Trainers"},
        {link: "#pricing", text: "Pricing"},
        {link: "#contact", text: "Contact us"},
    ]

    return (
        <nav>
            <div className="Navbar d-flex justify-content-between align-items-center w-100">
                <div className="logo fw-bolder fs-3">EXTREME FITNESS</div>
                <div className="d-none d-md-flex gap-5 align-items-center">
                    {navOptions.map((opt, idx)=>
                        <NavOptions link={opt.link} text={opt.text} key={idx}/>
                    )}
                </div>

                <div className="d-md-none d-block">H</div>
            </div>
        </nav>
    )
}