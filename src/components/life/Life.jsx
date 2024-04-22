import life from "../../assets/img/man4.jpeg";
import "./life.scss";

function Life() {
  return (
    <div className="life">
      <img className="life-image" src={life} alt="man" />
      <div className="life-contain">
        <h1 className="life-contain-title">Clothing for life</h1>
        <p className="life-contain-description">
          Two guys, and one hat to rule them both. Or so we thought – turned out
          we were in it for the long game, and are on a mission to change
          menswear for the better.
        </p>
      </div>
    </div>
  );
}

export default Life;
