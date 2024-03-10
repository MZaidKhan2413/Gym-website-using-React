import "../assets/styles/About.css"

export default function About() {
    return (
        <section className="About h-100" id="about">
            <div className="about-inner row h-100">
                <div className="about-text col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <div className="about-text-inner px-5">
                        <h1 className="fw-bolder">About Us</h1>
                        <p className="pe-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae unde odio aliquam ullam distinctio mollitia excepturi vero error, veritatis ex, consequatur totam dolorem sed nemo quod placeat, id perferendis. Minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure quae porro earum debitis repellat similique veniam! Asperiores obcaecati maxime magni, veniam architecto ea tempore assumenda in quae totam dolorem.
                        </p>
                    </div>
                </div>

                <div className="about-img col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img src="images/about-img.jpg" alt="aboutImg" />
                </div>
            </div>
        </section>
    )
}