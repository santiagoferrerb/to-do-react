import React from 'react';
import './style.css';
import { ToDoContext } from '../ToDoContext';

function CreateToDoButton ( ) {

    const { openModal, setOpenModal } = React.useContext(ToDoContext);

    return (
        <button
            className = {!openModal ? 'add-btn' : 'add-btn--selected'}
            onClick={() => (
                openModal ? setOpenModal(false) : setOpenModal(true)
                )}
        >+</button>
    );
}

export { CreateToDoButton };