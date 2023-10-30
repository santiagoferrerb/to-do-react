import React from 'react';
import './style.css';
import { ToDoContext } from '../ToDoContext';
import { MagicMotion } from 'react-magic-motion';

function CreateToDoButton ( ) {

    const { openModal, setOpenModal } = React.useContext(ToDoContext);

    return (
        <MagicMotion>
        <button
            className = {!openModal ? 'add-btn' : 'add-btn--selected'}
            onClick={() => (
                openModal ? setOpenModal(false) : setOpenModal(true)
                )}
        >+</button>
        </MagicMotion>
    );
}

export { CreateToDoButton };