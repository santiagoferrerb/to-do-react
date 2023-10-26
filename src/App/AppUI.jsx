import React from 'react';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDoLoading } from '../ToDoLoading';
import { ToDoContext } from '../ToDoContext';
import { Modal } from '../Modal';
import { ToDoForm } from '../ToDoForm';



function AppUI () {
    const {
        loading,
        error,
        searchedToDos,
        completeToDo,
        deleteToDo,
        openModal,
    } = React.useContext(ToDoContext);

    return (
        <React.Fragment>
            <ToDoCounter />
            <ToDoSearch />
                <ToDoList>
                        {loading && <ToDoLoading />}
                        {error && <p>Estamos en Error</p>}
                        {(!loading && searchedToDos.length === 0) && <p>Crea La Tarea</p>}


                        {searchedToDos.map(item => (
                            <ToDoItem
                                key={item.text}
                                text={item.text}
                                completed={item.completed}
                                onComplete = {() => completeToDo(item.text)}
                                onDelete = { () => deleteToDo(item.text)}
                            />
                        ))}
                </ToDoList>

            <CreateToDoButton />

            {openModal && (
                <Modal>
                    <ToDoForm />
                </Modal>
            )}
        </React.Fragment>
    )
};

export { AppUI } ;