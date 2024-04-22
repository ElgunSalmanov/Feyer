import clothing from "../../assets/img/man6.jpeg";
import "./clothing.scss";

function Clothing() {
  return (
    <div className="clothing">
      <div className="clothing-contain">
        <h1 className="clothing-contain-title">Clothing for life</h1>
        <p className="clothing-contain-description">
          Two guys, and one hat to rule them both. Or so we thought – turned out
          we were in it for the long game, and are on a mission to change
          menswear for the better.
        </p>
      </div>
      <img className="clothing-image" src={clothing} alt="man" />
    </div>
  );
}

export default Clothing;
