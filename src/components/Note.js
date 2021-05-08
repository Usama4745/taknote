import { MdDeleteForever } from 'react-icons/md';


const Note = () => {

    return (
        <div className="note">
            <span>
                Hello! this is our Note
            </span>
            <div className="note-footer">
                <small>13/11/2021</small>
                <MdDeleteForever className="delete-icon" size='1.3em' />
            </div>
        </div>
    )
}

export default Note;