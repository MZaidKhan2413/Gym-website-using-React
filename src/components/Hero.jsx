import "../assets/styles//Hero.css"

export default function Hero() {
    return (
        <section className="Hero w-100 h-100" id="home">
            <div className="hero-inner h-100 row">
                <div className="hero-text col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
                    <div className="hero-circle rounded-circle"></div>
                    <div className="hero-text-inner d-flex flex-column justify-content-center px-5">
                        <h1 className="">DISCOVER YOUR <br /> STRENGTH!</h1>
                    </div>
                </div>
                {/* <div className="hero-img col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <img src="images/model.png" alt="Model" />
                </div> */}
            </div>
        </section>
    )
}