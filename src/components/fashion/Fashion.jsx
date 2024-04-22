import man from "../../assets/img/man2.jpeg";
import men from "../../assets/img/man5.jpeg";
import "./fashion.scss";

function Fashion() {
  return (
    <div className="fashion">
      <div className="fashion-contain">
        <img className="fashion-contain-image" src={man} alt="man" />
        <p className="fashion-contain-description">
          Fashion industry has been operating on unsustainable business models
          for too long.
        </p>
      </div>
      <img className="fashion-image" src={men} alt="men" />
    </div>
  );
}

export default Fashion;
