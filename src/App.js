import React from 'react';
import './App.css';
import HeroesList from './json/heroes.json'
import Hero from './components/Hero'
import Header from './components/Header'


function App() {

  return (

    <div className="App">
      <Header></Header>
      <div class="heroes-list">
        {HeroesList.map(e => {
          return <div>
            <Hero data={e} />
          </div>
        })}
      </div>
    </div>

  );
}

export default App;