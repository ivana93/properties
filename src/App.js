import React, {useState, useEffect} from 'react';
import data from './assets/data.json';
import VillaComponent from './components/VillaComponent';



function App() {
  const [villas, setVillas] = useState([]);

  useEffect(() => setVillas(data), []);

  return (
    <div className="App">
      <header className="bg-green-100 mb-12">
        <img src="/images/group.svg" alt="bg-image" />
      </header>
      {
        villas.length === 0 ? (
          <p>Villas are fetching...</p>
        ) : (
          villas.map(villa => (        
              <VillaComponent  villa={villa} key={villa.id} />
            ))
        )
      }
    </div>
  );
}

export default App;
