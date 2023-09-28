import "../Style.css";
export const ItemDetail = ({ item }) => {
  return (
    <div>
      <div className="card">
        <img src={`../img/${item.img}`} alt={`Imagen de ${item.nombre}`} />
      </div>
      <div>
        <div>
          <h3 className="card__title"> {item.titulo} </h3>
          <p className="card__author"> Autor : {item.autor}</p>
          <p className="card__author"> Genero : {item.genero} </p>
          <p className="card__resena"> Reseña : {item.resumen} </p>
          <p className="card__price">{" "}Precio : ${new Intl.NumberFormat("de-DE").format(item.precio)}{" "}</p>
          <button className="card__button">Agregar</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
