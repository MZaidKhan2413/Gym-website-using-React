import "../assets/styles/PriceSection.css"
import PriceCard from "./PriceCard"

export default function PriceSection() {
    const plans = [
        {category: "Beginner", price: 500},
        {category: "Intermediate", price: 750},
        {category: "Advance", price: 1000},
    ]
    return (
        <section className="PriceSection h-100" id="pricing">
            <h1 className="text-center p-4 pt-0">Pricing</h1>
            <div className="h-75 px-5">
                <div className="row h-100 row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
                    {plans.map((plan, idx)=>(
                        <PriceCard plan={plan} key={idx} />
                    ))}
                </div>
            </div>
        </section>
    )
}