import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar'; 
import { BrowserRouter } from 'react-router-dom'; 
import Router from './routes/Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
