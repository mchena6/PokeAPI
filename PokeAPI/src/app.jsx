import { useState, useEffect } from 'react'
import './app.css'


export function App() {
  const [data, setData] = useState(null);
  
  // useEffect para cargar datos al montar el componente
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    // Convertir respuesta a JSON
    .then(response => response.json())
    // Guardar datos en el estado
    .then(data => setData(data))
  }, []);



  return (
    <div className="app">
      <h1>POKE API</h1>
      <div className='card'></div>
      <ul>
        {/* Renderizar lista de pokemones */}
        {data?.results.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>     
  );
}



