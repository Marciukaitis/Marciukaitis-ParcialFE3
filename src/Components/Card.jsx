import React from "react";

const Card = ({ user }) => {
  return (
    <div>
      <h3>Gracias por participar, {user.nombre}!</h3>
      <h4>Tu canción favorita es: {user.cancionFavorita}</h4>
    </div>
  );
};

export default Card;