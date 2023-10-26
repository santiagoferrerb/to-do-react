import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const ToDoContext = React.createContext();

function ToDoProvider({ children }) {

    //Custom Hook
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    //Estados
    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    // Estados Derivados
    const searchedToDos = todos.filter(
        item => item.text.toLowerCase().includes(searchValue.toLowerCase())
    );

    const completedToDos = todos.filter(item => !!item.completed).length;

    const totalToDos = todos.length;

    //Actualizadores de Estado
    const completeToDo = (text) => {
        const newToDos = [...todos];

        const todosIndex =  newToDos.findIndex( item => item.text.toLowerCase() === text.toLowerCase());

        newToDos[todosIndex].completed === false ? newToDos[todosIndex].completed = true : newToDos[todosIndex].completed = false;

        saveTodos(newToDos);
    };

    const deleteToDo = (text) => {
        const newToDos = [...todos];

        const todoIndex = newToDos.findIndex(item => item.text.toLowerCase() === text.toLowerCase());

        newToDos[todoIndex].completed === false && newToDos.splice(todoIndex, 1);

        saveTodos(newToDos);
    };

    const addToDo = (text) => {
        const newToDos = [...todos];
        newToDos.unshift({
            text,
            completed: false,
        });
        saveTodos(newToDos);
    };

    return (
        <ToDoContext.Provider value={{
            loading,
            error,
            completedToDos,
            totalToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal,
            addToDo,
            }}>
            { children }
        </ToDoContext.Provider>

    );
};

export { ToDoContext, ToDoProvider };


// const defaultToDos = [
//   { text: 'Pendiente #4', completed : false },
//   { text: 'Pendiente #3', completed : false },
//   { text: 'Pendiente #2', completed : false },
//   { text: 'Pendiente #1', completed : false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDos));
// localStorage.removeItem('TODOS_V1');
