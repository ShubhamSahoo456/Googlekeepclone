import react from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Note=(props)=>{

    const Destroy =() =>{
        props.DeleteItem(props.id);
    }

    return(
        <>
        <div className="note_arrange">
            <div className="note">
                <h1>{props.title}</h1><br />
                <p>{props.content}</p>
                <IconButton aria-label="delete" className="del_btn" onClick={Destroy}>
                    <DeleteIcon fontSize="large" />
                </IconButton>
            </div>
            
        </div>
        </>
    );
}

export default Note;