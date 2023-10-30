import './ToDoItem.css';
import { BiSolidMessageSquareCheck } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { MagicMotion } from 'react-magic-motion';


function ToDoItem({ text, completed, onComplete, onDelete }) {
    return (

      <li className={completed === true ? 'ToDoItem--completed' : undefined}>

        <BiSolidMessageSquareCheck
          className = {completed === true ? 'checked' : undefined}
          onClick = {onComplete}
          fill= {completed ? '#897c80': '#34e065' }

        />

        <p className = {completed === true ? 'ToDoText--completed': undefined}>{text}</p>

        <MdDeleteOutline
          onClick = { onDelete }
          className = {completed === true ? 'inactive' : undefined }
          fill = '#897c80'
        />
      </li>
    );
  }

  export { ToDoItem };