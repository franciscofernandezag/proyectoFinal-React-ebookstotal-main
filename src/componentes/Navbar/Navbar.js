import { Link } from "react-router-dom";
import logo from "../Navbar/logo2.png";
import "../Style.css";
import Categorias from "./Catergorias/Categorias";
import "../Style.css";

const Navbar = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>
      <div>
        <h1>EBOOKSTOTAL</h1>
        <h2>TIENDA VIRTUAL DE EBOOKS</h2>
      </div>
      <div>
        <Categorias />
      </div>
    </header>
  );
};

export default Navbar;
