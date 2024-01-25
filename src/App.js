
import './App.css';
import React from 'react';


import Header from './Components/header';
import Footer from './Components/footer';
import Note from './Components/note';
import notes from './data/notes';


function App() {
  return (
    <div>
    <Header />

{notes.map((notes)=>{
  return <Note title={notes.title} content={notes.content} key={notes.id}/>
})}

    
    <Footer />
    </div>
  );
}





export default App;
