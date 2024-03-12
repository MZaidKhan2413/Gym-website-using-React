import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { CgGym } from "react-icons/cg";
import "../assets/styles/PriceCard.css"

export default function PriceCard({plan}) {

    return (
        <div className="card mb-3 h-100">
            <div className="card-inner w-100 h-100 p-3 d-flex flex-column justify-content-between">
                <h2 className="plan p-1"><CgGym /> {plan.category.toUpperCase()}</h2>
                <h3 className="text-center fw-bolder pt-1 pb-4">&#8377; {plan.price} /month</h3>
                <div className="perks h-75 w-100 fs-5">

                    <li><TiTick className="TiTick"/>Training Overview</li>
                    <li><TiTick className="TiTick"/>Beginner Classes</li>
                    <li>
                        {plan.category == "Intermediate" || plan.category == "Advance" ? <TiTick className="TiTick"/> : <RxCross2 className="RxCross2"/>}
                        Personal Trainer
                    </li>
                    <li>
                    {plan.category == "Advance"? <TiTick className="TiTick"/> : <RxCross2 className="RxCross2"/>}
                        Olympic Weightlifting
                    </li>
                </div>
                <button className="price-btn btn align-self-center mt-2">Apply</button>
            </div>
        </div>
    )
}