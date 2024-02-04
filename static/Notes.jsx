import React, {Fragment} from "react";

export default function Note({notes,setNotes})
{
    function deleteNote(id)
    {
        setNotes((notes)=>notes.filter(note=>note.id!==id))
    }
    return(
        <Fragment>
            {notes.map((note)=><div key={note.id} className="note">
                <h1>{note.title}</h1>
                <p>{note.text}</p>
                <button onClick={()=>deleteNote(note.id)}>DELETE</button>
            </div>)}
        </Fragment>
    )
}