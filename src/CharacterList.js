import React from 'react';

const CharacterList = ({ characters, onSelect, onEdit }) => {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id} className="character-item">
          <span onClick={() => onSelect(character)}>{character.name}</span>
          <div>
            <button onClick={() => onEdit(character)}>Editar</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;




