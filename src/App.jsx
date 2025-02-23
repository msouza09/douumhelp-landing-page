import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Main from './components/Main';

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
