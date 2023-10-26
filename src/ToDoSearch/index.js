import { ToDoContext } from '../ToDoContext';
import './ToDoSearch.css';
import React from 'react';


function ToDoSearch() {

  const {
    searchValue,
    setSearchValue
  } = React.useContext(ToDoContext)

  return (
    <input
      placeholder="🔎 Buscar"
      value = { searchValue }
      onChange = { e => {
        setSearchValue(e.target.value);
      }}
    ></input>
  );
};

export {ToDoSearch};