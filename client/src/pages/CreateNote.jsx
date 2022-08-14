/*
------Create Note component------
-Allow a user to create a new collection
-Allow a user to enter a topic for the collection
-Allow a user add a note
-Allow user to edit a note
-Allow user to delete a note
*/

import React, {useState} from "react";
import Note from '../components/Note'
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext";
import {useNotesContext} from "../hooks/useNotesContext"

function CreateNote(props) {

  const {dispatch} = useNotesContext()
  const {user} = useAuthContext()
  
  let navigate = useNavigate();

    // used to open the input form
  const [isExpanded, setExpanded] = useState(false);

  // const [error, setError] = useState(null)

  //topic for the collection
  const [topic, setTopic] = useState("");

  //notes container that will hold all individual note items
  const [createNotes, setCreateNotes] = useState([]);

   // single note item comprisong of a title and contents
  const [note, setNote] = useState({
    title: "", content: ""
  });

  /* when the user inputs something in the form, as the user is typing the title and contents are being set respectively */
  const handleChange= (event) =>{
    const { name, value } = event.target;
    setNote(prevNote => { return {...prevNote, [name]: value} });
  }

  /*set the topic when the user inputs something in the topic form*/
  const handleTopic = (event) =>{
      event.preventDefault();
      setTopic(event.target.value);
  }

  /* add an individual note to the notes array when the user clicks on sumbit */
  const submitNote=(event) =>{
      event.preventDefault();
      setCreateNotes(prevNotes => { return [...prevNotes, note] });
      //reset state
      setNote({ title: "", content: "" });
  }

  /* save the collection by sending the Collection to the server where a new item will be created and saved*/
  const saveCollection= async (e) =>{
    e.preventDefault();

    if(!user){
      
      return 
    }

    const response = await fetch('https://studycardsserver.herokuapp.com/api/collections/create', {
      method: 'POST',
      body: JSON.stringify({topic,createNotes}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${user.token}`
      }})

    const json = await response.json()

    if (!response.ok) {
      // setError(json.error)
    }

    if (response.ok) {
      setTopic('')
      setCreateNotes('')
      setNote('')
      // setError("Succesfully created a new collection")
      console.log('new collection added', json)
      dispatch({type: 'CREATE_NOTES', payload: json})
      navigate("/home")
    }    
  }

  /*expand the form inputs*/
  const expand =() =>{
    setExpanded(true);
  }

  /* remove an individual note from the notes array when the user click on the delete button */
  const deleteNote =(id) =>{
    setCreateNotes(prevNotes => { return prevNotes.filter((noteItem, index) => { 
      return index !== id });
    });
  }

  /* add the note title and contents into the form to allow the user to edit the details of the note*/
  // const editNote=(id) =>{
  //   console.log(id);
  //   setNote({title: notes[id].title, content: notes[id].content})
  //   }

  //   if(!!user){
  //     return <Navigate to={"/"}/>
  // }

  return (
    <div className="notesContainer">

      <div className="formInputArea">
        <form className="topic">
          <input
                name="Topic"
                onChange={handleTopic}
                value={topic}
                placeholder="Enter Topic here..." 
                required
              />
          {(createNotes.length === 0) ? null : <button className="save-Collection" onClick={saveCollection}>Save Collection</button>    } 
        </form>
      
        { (topic==="") ? null: 
          <form className="create-note">
          {isExpanded && (
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Note Title"
            />
          )}

          <textarea
            name="content"
            onClick={expand}
            onChange={handleChange}
            value={note.content}
            placeholder="Note Content"
            rows={isExpanded ? 3 : 1}
          />
          <Zoom in={isExpanded}>
            <Fab onClick={submitNote}> <AddIcon /> </Fab> 
          </Zoom> 
        </form>
        }

      </div>
    
    {/* display individual notes items */}
    <div className="noteItems">
    {(typeof createNotes ==="undefined") ? null :  createNotes.map((noteItem, index) => {
           return (
             <Note
               key={index}
               id={index}
               title={noteItem.title}
               content={noteItem.content}
               onDelete={deleteNote} />
           )
         })}
    </div>
  </div>
  );
}
export default CreateNote;

