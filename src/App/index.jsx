import { AppUI } from './AppUI';

import './App.css';
import React from 'react';
import { ToDoProvider } from '../ToDoContext';

function App() {

  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
};

export default App;