import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Services from './components/Services';

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <Main />
      <Services />
    </div>
  );
}

export default App;
