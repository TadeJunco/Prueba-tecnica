import React, { useState } from 'react';

const CharacterForm = ({ character, onAddCharacter }) => {
  const [name, setName] = useState(character ? character.name : '');
  const [description, setDescription] = useState(character ? character.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCharacter({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form className="character-form" onSubmit={handleSubmit}>
      <h3>{character ? 'Editar personaje' : 'Agregar personaje'}</h3>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Nombre" 
        required 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Descripcion" 
        required 
      />
      <button type="submit">{character ? 'Update' : 'Agregar'}</button>
    </form>
  );
};

export default CharacterForm;


