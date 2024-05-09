import notFound from "../../assets/gif/404.gif";
import "./notFound.scss";

function NotFound() {
  return (
    <div className="notfound">
      <img className="notfound-image" src={notFound} alt="404" />
    </div>
  );
}

export default NotFound;
