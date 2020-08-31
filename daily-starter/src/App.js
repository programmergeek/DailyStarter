import React from 'react';
import './App.css';
import WeatherContainer from './components/Weather/WeatherContainer';
import News from './components/News/News';

function App() {
  return (
    <div className="App">
      <WeatherContainer/>
      <News/>
    </div>
  );
}

export default App;
