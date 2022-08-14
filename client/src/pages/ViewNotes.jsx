/*
------View Notes Page------
-Allow user to view the notes in a slideshow format
-get notes from localhost
*/

import React,{useState} from 'react'
import {FlashcardArray} from "react-quizlet-flashcard";

function ViewNotes() {

    // the collection currently stored in the local storage that will be used for the slideshow
    const [flashcards] = useState(JSON.parse(localStorage.getItem("notes")))
    
    //the quizlet flashcard package requires a specific key value pair, so this state will hold the new notes with the changed key value pairs
    const [slideNotes,setSlideNotes] = useState()

    //the topic of the collection from local storage
    const topic = JSON.parse(localStorage.getItem("topic"))
  
    //this function renames the key value pairs of the flashcards in order to make it compatible with the requirements of 'FlashcardArray' package
    const rename = ()=>{
      let i;
      for(i = 0; i < flashcards.length; i++){
          flashcards[i].front = flashcards[i]['title'];
          flashcards[i].back = flashcards[i]['content'];
          delete flashcards[i].title;
          delete flashcards[i].content;
      }
      setSlideNotes(flashcards)
    }
 
  return (
    <div className="viewNoteItems">
      <h1>{topic} Flashcards</h1>
      {(typeof slideNotes==="undefined") ? null : <FlashcardArray cards={slideNotes} /> }
      <button onClick={rename}>View Slides</button>
    </div>
  )}
export default ViewNotes
