import React from 'react';
import Header from './components/Header.js';
import routes from './routes.js'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      {routes}
    </div>
  );
}

export default App;
