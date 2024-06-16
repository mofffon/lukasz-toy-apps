import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>Strona główna</p>
      <Link to="/queens">Królowe</Link>
      <Link to="">Wąż (Snake)</Link>
    </>
  );
};

export default HomePage;
