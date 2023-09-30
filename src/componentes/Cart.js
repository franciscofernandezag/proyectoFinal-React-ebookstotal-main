import React, { useContext, useEffect, useState } from "react";
import { CustomContext } from "./Context/CustomContext"; 
import { Link } from "react-router-dom";
import "../../src/componentes/Style.css";

const Cart = () => {
  const { cart, totals, removeFromCart } = useContext(CustomContext);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await fetch("/json/products.json");
        if (!response.ok) {
          throw new Error("Error al cargar los datos del producto.");
        }
        const data = await response.json();
        setProductsData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProductsData();
  }, []);

  return (
    <div className="cart-container">
      {!cart.length ? (
        <>
          <h1>No hay productos agregados al carrito.</h1>
          <Link to={"/"}>Para volver al Home</Link>
          <h1>Por favor seleccione productos e indique opción comprar.</h1>
        </>
      ) : (
        <>
          <div className="cart-products">
            {cart.map((product) => {
              const productData = productsData.find((data) => data.id === product.id);

              return (
                <div key={product.id} className="product">
                  <h1>{productData.title}</h1>
                  <img src={productData.image} alt={productData.title} />
                  <h4>Precio: {productData.price}</h4>
                  <h4>Cantidad: {product.quantity}</h4>
                  <h2>Subtotal: ${productData.price * product.quantity}</h2>
                  <button onClick={() => removeFromCart(product.id)}>
                    Eliminar
                  </button>
                </div>
              );
            })}
          </div>
          <h1 className="cart-total">Total : ${totals.total}</h1>
        </>
      )}
    </div>
  );
};

export default Cart;
