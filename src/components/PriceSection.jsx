import PriceCard from "./PriceCard"
import "../assets/styles/PriceSection.css"

export default function PriceSection() {
    const plans = [
        {category: "Beginner", price: 500},
        {category: "Intermediate", price: 750},
        {category: "Advance", price: 1000},
    ]
    return (
        <section className="PriceSection" id="pricing">
            <h1 className="text-center pb-4 pt-0 fw-bolder">PRICING</h1>
            <div className="h-75 px-5">
                <div className="row h-100 column-gap-4">
                    {plans.map((plan, idx)=>(
                        <PriceCard plan={plan} key={idx} />
                    ))}
                </div>
            </div>
        </section>
    )
}