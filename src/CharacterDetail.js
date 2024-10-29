import React from 'react';

const CharacterDetail = ({ character, onEdit, onDelete }) => {
  if (!character) return null; // Asegúrate de que haya un personaje seleccionado

  return (
    <div>
      <h2>{character.name}</h2>
      <p>{character.description || "Sin descripción disponible"}</p>
      <button onClick={() => onEdit(character)}>Editar</button>
      <button onClick={() => onDelete(character.id)}>Eliminar</button> {/* Botón para eliminar */}
    </div>
  );
};

export default CharacterDetail;


