import React, { useState, useEffect } from 'react'; 
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import CharacterForm from './CharacterForm';
import axios from 'axios';
import './App.css';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [editingCharacter, setEditingCharacter] = useState(null); 

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://gateway.marvel.com/v1/public/characters?apikey=a00c6eed0ab7ad7e5eae0639bbeda26a');
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchCharacters();
  }, []);

  const addCharacter = (character) => {
    if (editingCharacter) {
      // Actualiza el personaje existente
      setCharacters(characters.map((char) => (char.id === editingCharacter.id ? character : char)));
      setEditingCharacter(null); 
    } else {
      // Agrega un nuevo personaje
      setCharacters([...characters, { ...character, id: characters.length + 1 }]); 
    }
  };

  const editCharacter = (character) => {
    setEditingCharacter(character);
  };

  const deleteCharacter = (id) => {
    setCharacters(characters.filter(character => character.id !== id));
  };

  return (
    <div>
      <h1>Personajes Marvel</h1>
      <CharacterForm character={editingCharacter} onAddCharacter={addCharacter} />
      <CharacterList 
        characters={characters} 
        onSelect={setSelectedCharacter} 
        onEdit={editCharacter} // Asegúrate de agregar esto
      />
      {selectedCharacter && (
        <CharacterDetail 
          character={selectedCharacter} 
          onEdit={editCharacter} 
          onDelete={deleteCharacter} 
        />
      )}
    </div>
  );
};

export default App;

