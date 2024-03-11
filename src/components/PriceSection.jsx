import "../assets/styles/PriceSection.css"
import PriceCard from "./PriceCard"

export default function PriceSection() {
    return (
        <section className="PriceSection h-100" id="pricing">
            <h1 className="text-center p-4">Pricing</h1>
            <div className="h-75 w-100 row d-flex flex-wrap justify-content-between px-4 px-md-5">
                <PriceCard category={{price: 5, }}/>
                <PriceCard category={{price: 5, }}/>
                <PriceCard category={{price: 5, }}/>
            </div>
        </section>
    )
}