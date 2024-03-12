import TrainerCard from "./TrainerCard"

export default function TrainerSection() {

    const trainers = [
        {name: "Amar Singh", img: "images/trainer1.jpg",},
        {name: "Akbar Ali", img: "images/trainer2.jpg",},
        {name: "Anthony D'Souza", img: "images/trainer3.jpg",},
    ]

    return (
        <section className="TrainerSection h-100" id="trainers">
            <h1 className="text-center p-4">Our Trainers</h1>
            <div className="trainer-cards row d-flex flex-wrap justify-content-between px-4 px-md-5 w-100">
                {trainers.map((t, idx)=>(
                    <TrainerCard trainer={t} key={idx} />
                ))}
            </div>
        </section>
    )
}