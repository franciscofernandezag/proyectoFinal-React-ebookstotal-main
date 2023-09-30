import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true); // Para manejar la carga de datos

  useEffect(() => {
    // Cambia la ruta del archivo JSON a una ruta relativa correcta
    fetch('../json/productos.json')
      .then((response) => response.json())
      .then((products) => {
        const item = products.find((prod) => prod.id === parseInt(id));
        setProducto(item);
        setLoading(false); // Indica que los datos se han cargado
      });
  }, [id]); // Agrega id como dependencia para que se recargue cuando cambie

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemDetail item={producto} />
      )}
    </div>
  );
};
