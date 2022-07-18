import React from 'react';
import './App.scss';
import { Routes,
        Route 
              } from 'react-router-dom';
import HomePage from './Pages/Home';
import OurCoffee from './Pages/OurCoffee';
import Pleasure from './Pages/Pleasure';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://62d5b91415ad24cbf2cc71d5.mockapi.io/items')
    .then(res => res.json())
    .then(arr => setItems(arr))
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage arr={items}/>}/>
        <Route path='/ourcoffee' element={<OurCoffee arr={items}/>}/>
        <Route path='/pleasure' element={<Pleasure />}/>
      </Routes>
    </div>
    
  );
}

export default App;
