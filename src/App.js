
import './App.css';
import React, { useState } from 'react';


import Header from './Components/header';
import Footer from './Components/footer';
import Note from './Components/note';

import AddNote from './Components/addNote';


function App() {

  const [notes, setNotes]=useState([]);


  function newNote(newNote){
      setNotes(prevNotes=>{
      return [...prevNotes,newNote];
   })
  }

  function deleteNote(id){
    setNotes(prevNotes=>{
    return prevNotes.filter((notesItem,index)=>{
      return index!==id;
    })
 })
}




  return (
    <div>
    <Header />
    <AddNote onAdd={newNote}/>
    

{notes.map((notesItem,index)=>{
  return <Note 
    key={index}
    id={index}
    title={notesItem.title} 
    content={notesItem.content} 
    
    onDelete={deleteNote}/>
})}

    
    <Footer />
    </div>
  );
}





export default App;
