import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ListClient from './components/ListClient';
import { Route, Routes } from 'react-router-dom';
import CreateClient from './components/CreateClient';
import ClientDetail from './components/ClientDetail';

function App() {
  return (
    <div>
      <Navbar brand='Client Manager'/>
      <main>
        <Routes>
          <Route path='/' element={ <ListClient /> } />
          <Route path='/customers/:id' element={ <ClientDetail /> } />
          <Route path='/customers/create' element={ <CreateClient /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
