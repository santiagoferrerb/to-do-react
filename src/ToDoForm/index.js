import React from 'react';
import './ToDoForm.css'
import { ToDoContext } from '../ToDoContext';

function ToDoForm() {

    const { setOpenModal, addToDo } = React.useContext(ToDoContext)

    //Estados locales
    const [newValue , setNewValue] = React.useState('');

    //Actualizadores de Estados
    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(newValue);
        setOpenModal(false);
    }

    const onCancel = (e) => {
        setOpenModal(false);
    }

    const onChange = (e) => {
        setNewValue(e.target.value);
    }

    return (
        <>
            <h1 className='nueva-h1'>✍🏻<br/>Crea Una<br/>Nueva Tarea</h1>
            <form
                className='nueva-form'
                onSubmit = {onSubmit}
            >
                <textarea
                    placeholder='Escribe la nueva tarea aqui'
                    className='form-text'
                    value={newValue}
                    onChange={onChange}
                />
                <div className='btns'>
                    <button
                        type='button'
                        className='Form-button Form-button--cancel'
                        onClick={onCancel}
                    >Cancelar</button>
                    <button
                        type='submit'
                        className='Form-button Form-button--add '
                    >Agregar</button>

                </div>
            </form>
        </>
    )
};

export { ToDoForm };