import React, {Fragment} from "react";

export default function Form({title,setTitle,text,setText,setSubmit,onAddNotes}){
    function handleChange(e)
    {
        setTitle(e.target.value);
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        const id=crypto.randomUUID()
        const newNote={
            title,
            text,
            id
        };
        onAddNotes(newNote)
        setSubmit(true)
    }
    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input name="title" type="text" placeholder="Title" value={title} onChange={handleChange}/>
                <textarea name="content" placeholder="Take a Note..." rows="3" value={text} onChange={(e) => setText(e.target.value)}/>
                <button>ADD</button>
            </form>
        </Fragment>
    )
}

