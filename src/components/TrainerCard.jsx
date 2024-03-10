import "../assets/styles//TrainerCard.css"
import { FaInstagram, FaLinkedin  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TrainerCard({trainer}) {
    return (
        <div className="card col-12 col-sm-5 col-md-3 mb-3">
            <img src={trainer.img} className="card-img-top p-1" alt="Trainer"/>
            <div className="card-body">
              <h4 className="card-title text-center">{trainer.name}</h4>
              <div className="trainer-socials d-flex justify-content-around pt-1">
                <a href={trainer.ig || "#"} target="_blank"><FaInstagram size={"1.25em"} className="social-icons" /></a>
                <a href={trainer.twitter || "#"} target="_blank"><FaXTwitter size={"1.25em"} className="social-icons" /></a>
                <a href={trainer.linkedIn || "#"} target="_blank"><FaLinkedin size={"1.25em"} className="social-icons" /></a>
              </div>
            </div>
        </div>
    )
}