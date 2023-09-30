import { Link } from 'react-router-dom';
import "../../Style.css"
import CartWidget from "../../CartWidget/CartWidget";

const Categorias = () => {
  return (
    <nav>
      <ul>
        <li><Link to={"/category/1"}>Novela</Link></li>
        <li><Link to={"/category/2"}>Divulgación</Link></li>
        <li><Link to={"/category/3"}>Clásico</Link></li>
        <li><Link to={"/category/4"}>Filosofía</Link></li>
        <li><Link to={"/category/5"}>Auto Ayuda</Link></li>
        <li className="cart-link"> {}
          <div className="cart-container"> {}
            <Link to="/cart"><CartWidget /></Link> {}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Categorias;
