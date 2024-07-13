import "./App.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <p>Strona główna</p>
      <div className="link-container">
        <Link className="link" to="/queens">
          Królowe
        </Link>
        <Link className="link" to="/snake">
          Wąż (Snake)
        </Link>
        <Link className="link" to="/puzzle">
          Puzzle
        </Link>
        <Link className="link" to="/gameOfLife">
          Game Of Life
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
