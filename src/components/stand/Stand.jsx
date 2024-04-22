import hand from "../../assets/img/hand.jpeg";
import men from "../../assets/img/man7.jpeg";
import "./stand.scss";

function Stand() {
  return (
    <div className="stand">
      <h1 className="stand-title">What we stand for</h1>
      <div className="stand-contain">
        <div className="stand-contain-sustainability">
          <h2 className="stand-contain-title">Sustainability</h2>
          <p className="stand-contain-description">
            We want to be around for a long time, and to do that, we need to
            look after our planet. That's why our business practices and
            production methods are fully certified sustainable by the Jackson
            Foundation Sustainability Board.
          </p>
        </div>
        <div className="stand-contain-carbon">
          <h2 className="stand-contain-title">Carbon netural</h2>
          <p className="stand-contain-description">
            Whenever possible, we use carbon-neutral production and delivery
            methods, but sometimes our options are limited. When that happens,
            we compensate for the carbon emissions by actively contributing to
            various emission reduction programs.
          </p>
        </div>
        <div className="stand-contain-quality">
          <h2 className="stand-contain-title">Quality</h2>
          <p className="stand-contain-description">
            In our minds, quality doesn't always have to be only synonymous with
            high prices. We've worked hard to create products that don't have a
            high price tag, but that comply with our internal, extremely high
            quality standards.
          </p>
        </div>
        <div className="stand-contain-organic">
          <h2 className="stand-contain-title">Organic</h2>
          <p className="stand-contain-description">
            In order to do our share for the planet and its people, we only use
            sustainably-sourced organic cotton in our fashion. This way, we can
            do our bit to end modern slavery and third-world poverty, and
            support small-scale farmers directly.
          </p>
        </div>
      </div>
      <div className="stand-images">
        <img className="stand-images-hand" src={hand} alt="hand" />
        <img className="stand-images-men" src={men} alt="men" />
      </div>
    </div>
  );
}

export default Stand;
