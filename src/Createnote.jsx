import react, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Createnote =(props)=>{
    const[Expand,setExpand] = useState(false);
    const[note ,setnote] = useState(
        {
            title : "",
            content : ""
        }
    );

    const inputEvent=(event) =>{
        const{value ,name}=event.target;
        //console.log(name);
        setnote((prev) =>{
            return(
                {
                    ...prev,
                    [name] : value
                }
            );
        });
    }

    const sendNote =() => {
        props.addNote(note);
        setnote(()=>{
            return (
                {
                    title : "",
                    content : ""
                }
            )
        });
    }

    const ExpandTitle=()=>{
        setExpand(true);
    }

    const ShrinkTitle=()=>{
        setExpand(false);
    }

    return(
        <>
            <div className="main_note">
                <form>
                {Expand?
                    <input 
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={note.title}
                        onChange={inputEvent}
                        autoComplete="off" />:null}
                    <textarea 
                        rows=""
                        columns=""
                        value={note.content}
                        name="content"
                        onChange={inputEvent}
                        placeholder="Write a note..."
                        onClick={ExpandTitle}
                        onDoubleClick={ShrinkTitle}
                        >
                    </textarea>
                </form>
                {Expand?
                <Button variant="contained" className="btn" onClick={sendNote}>
                    <AddIcon className="addicon"/>
                </Button>:null
                }       
            </div>
        </>
    );
}

export default Createnote;