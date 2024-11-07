import React, { useState } from 'react'
import Card from './Card';

const Form = () => { 
    const [user, setUser] = useState({
      nombre: "",
      cancionFavorita: "",
    });
  
    const [mostrar, setMostrar] = useState(false);
    const [error, setError] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  

      if (
        user.nombre.trim().length >= 3 &&
        user.cancionFavorita.trim().length >= 6
      ) {
        setMostrar(true); 
        setError(false);  
      } else {
        setError(true);   
      }
    };
  
    return (
      <div>
        {mostrar ? (
          <Card user={user} />
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input 
              type="text"
              id="nombre"
              value={user.nombre}
              onChange={(e) => setUser({ ...user, nombre: e.target.value })} 
            />
            <br />
            <label>Canción favorita: </label>
            <input
              type="text"
              id="cancionFavorita"
              value={user.cancionFavorita}
              onChange={(e) => setUser({ ...user, cancionFavorita: e.target.value })} 
            />
            <br />
            <button type="submit" style={{ color: "green" }}>Enviar</button>
            {error && (
              <h4 style={{ color: "red" }}>
                Por favor chequea que la información sea correcta
              </h4>
            )}
          </form>
        )}
      </div>
    );
  };
  
  export default Form;