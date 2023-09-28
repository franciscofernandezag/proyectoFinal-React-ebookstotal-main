import { Link } from "react-router-dom";
import "../Style.css";

export const Item = ({ item }) => {
  return (
    <div className="container">
      <div className="card">
        <Link to={`/item/${item.id}`}>
          <img src={`../img/${item.img}`} alt={`Imagen de ${item.nombre}`} />
        </Link>
        <div className="card__info">
          <h4 className="card__title">{item.titulo}</h4>
          <p className="card__author"> Autor - {item.autor} </p>
          <p className="card__price">
            Precio - $ {new Intl.NumberFormat("de-DE").format(item.precio)}
          </p>
          <button className="card__button">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};