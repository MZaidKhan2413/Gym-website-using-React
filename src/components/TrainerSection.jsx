import TrainerCard from "./TrainerCard"
import "../assets/styles/TrainerSection.css"

export default function TrainerSection() {

    const trainers = [
        {name: "Amar Singh", img: "images/trainer1.jpg",},
        {name: "Akbar Ali", img: "images/trainer2.jpg",},
        {name: "Anthony D'Souza", img: "images/trainer3.jpg",},
    ]

    return (
        <section className="TrainerSection" id="trainers">
            <h1 className="text-center pb-4 pt-0 fw-bolder">OUR TRAINERS</h1>
            <div className="trainer-cards row justify-content-around px-4 px-sm-0 w-100">
                {trainers.map((t, idx)=>(
                    <TrainerCard trainer={t} key={idx} />
                ))}
            </div>
        </section>
    )
}