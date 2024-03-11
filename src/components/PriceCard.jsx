import "../assets/styles/PriceCard.css"

export default function PriceCard({category = null}) {
    return (
        <div className="card col-12 col-sm-5 col-md-3 mb-3 h-100">
            <div className="card-inner w-100 h-100 p-3 d-flex flex-column justify-content-between">
                <h2 className="text-center fw-bolder">{category.price}</h2>
                <div className="perks h-75 w-100 bg-success"></div>
                <button className="price-btn btn align-self-center mt-2">Apply</button>
            </div>
        </div>
    )
}