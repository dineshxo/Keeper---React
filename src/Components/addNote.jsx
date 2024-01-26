import React, { useState } from 'react'

function AddNote(props) {

    const [note,setNote]= useState({
        title:"",
        content:""
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
    }

    function submitNote(event){

        props.onAdd(note);
        event.preventDefault();
        setNote({title:"",
        content:""})
    }



  return (
    <div className='addNote'>
        <form>

            <input type="text"
             name='title' 
             placeholder='Title' 
             value={note.title} 
             onChange={handleChange}/>

            <textarea 
            name='content' 
            placeholder='Take a note....'  
            rows="3"
             value={note.content} 
             onChange={handleChange}>
             </textarea>

            <button onClick={submitNote}>Add</button>

        </form>
      
    </div>
  )
}

export default AddNote;
