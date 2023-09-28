import { Link } from 'react-router-dom';
import "../../Style.css"
import CartWidget from "../../CartWidget/CartWidget";

const Categorias = () => {
    return (
      <nav>
                <ul >
                  <li><Link  to={"/category/1"}>Novela</Link></li>
                  <li><Link  to={"/category/2"}>Divulgacion</Link></li>
                  <li><Link  to={"/category/3"}>Clasico</Link></li>
                  <li><Link  to={"/category/4"}> Filosofia </Link></li>
                  <li><Link  to={"/category/5"}> Auto Ayuda </Link></li>
                  <li> <Link><CartWidget /></Link></li>
                </ul>
        </nav>
    );
}

export default Categorias;
