import React, {Component, Fragment, useState} from 'react';
import Header from './Header'
import Footer from "./Footer";
import Note from "./Notes";
import Form from "./Form";
export default function App(){
    const [title,setTitle]=useState("")
    const [text,setText]=useState("")
    const [submit, setSubmit]=useState(false)
    const [notes,setNotes]=useState([])

    function handleNotes(newNote) {
        setNotes((prevNotes) => [...prevNotes, newNote]);
        setTitle("")
        setText("")
    }
    console.log(notes)
    return (
      <Fragment>
        <Header/>
          <Form title={title} setTitle={setTitle} text={text} setText={setText} setSubmit={setSubmit} onAddNotes={handleNotes}/>
          {submit&&<Note notes={notes} setNotes={setNotes}/>}
          <Footer/>
      </Fragment>

    );
}
