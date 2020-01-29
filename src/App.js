import React from 'react';
import './App.css';
import Main from './components/main'

function App() {
  return (
      <div className="app container-fluid" data-testid="app-container">
        <Main/>
      </div>
  );
}

export default App;
