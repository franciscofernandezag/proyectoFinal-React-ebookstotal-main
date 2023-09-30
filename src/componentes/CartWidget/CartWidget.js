import React, { useContext } from "react";
import { CustomContext } from "../Context/CustomContext";

import Carrito from "../CartWidget/carrito1.png"


export const CartWidget = () => {
  const { totals } = useContext(CustomContext);

  return (
    <>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <img  src={Carrito} alt="Carrito" />
        <span style={{
          position: 'absolute',
          top: '15px',
          right: '20px',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold'
        }}>0</span>
           {totals.qty > 0 && <p>{totals.qty}</p>}
      </div>
    </>
  );
};

export default CartWidget;