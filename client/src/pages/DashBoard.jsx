/*
------Dashboard (HomePage) component------
-Display all existing collections
-Allow a user to create a new collection by clicking a button/link
-Allow a user to view a collection
-Allow a user to delete a collection
-Allow a user to logout
*/
import React,{useEffect, useState} from "react"
import {Button, OverlayTrigger, Tooltip, Table, Modal, Form} from 'react-bootstrap';
import {useNavigate} from "react-router-dom"
import {useNotesContext} from "../hooks/useNotesContext"
import { useAuthContext } from "../hooks/useAuthContext";

 function DashBoard() {

    const { notes, dispatch} = useNotesContext()
    const {user} = useAuthContext()
    let navigate = useNavigate();

    //toggle the display property of the modal
	  const [show, setShow] =useState(false)
    //determine which collection to delete
    const [deleteIndex, setDeleteIndex]=useState(null)

    //fetch all notes from the database when the page loads
    useEffect(()=>{
  
      const fetchNotes = async ()=>{
      
        const response = await fetch('https://studycardsserver.herokuapp.com/api/collections/',{headers: {'Authorization': `Bearer ${user.token}`}})

        const json = await response.json()

        if (response.ok) {
          dispatch({type: 'SET_NOTES', payload: json})
        }
      }

      if(user){
        fetchNotes()
      } 
    
    },[dispatch, user])
	
    //show the delete Note modal and set the DeleteIndex
    const handleShow = (i) =>{
      setDeleteIndex(i)
      setShow(true)
    }

    //close the delete Note modal
    const handleClose = () =>{
      setShow(false)
    }
    
    //when the user clicks on the view collection button, set the notes that the user will view and navigate them to the view page
    const handleView =(i) =>{
    
      localStorage.removeItem('notes');
      localStorage.removeItem('topic');
      localStorage.setItem("notes", JSON.stringify(notes[i].item))
      localStorage.setItem("topic", JSON.stringify(notes[i].topic))
      navigate("/view")
    }
    
    //when the user clicks on the edit collection button, set the notes that the user will view and navigate them to the edit page
    const handleEdit = (i) =>{

      localStorage.removeItem('notes');
      localStorage.removeItem('topic');
      localStorage.setItem("notes", JSON.stringify(notes[i]))
      navigate("/edit")
    }

    //when the user clicks on the delete collection button, set the notes id of the collection user wants to delete send request to the server to delete the item
    const handleDelete = async (e) =>{
      e.preventDefault()
      const deleteNoteId =(notes[deleteIndex]._id)
      const response = await fetch('https://studycardsserver.herokuapp.com/api/collections/delete/' + deleteNoteId, {
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()
      if (response.ok) {
        console.log(json)
        dispatch({type: 'DELETE_NOTES', payload: json})
        setShow(false)
      }
    }

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6" >
            <h2>My Collections </h2>
          </div>
          <div className="col-sm-6">
					<Button variant="success" onClick={()=>navigate("/create")} style={{float: 'right'} }><i className="material-icons">&#xE147;</i> <span>Add New Collection</span></Button>					
				</div>
        </div>
      </div>

      <Table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notes && notes.map((collection,i)=>{
            return ( 
                <tr key={i}> 
                  <td className="col-sm-8">{collection.topic}</td>
                  
                  <td className="col-sm-4">   
                    <OverlayTrigger
                      overlay={ <Tooltip id={`tooltip-right`} style={{position: 'absolute'}}> View </Tooltip> }>
                      <Button onClick={ ()=>handleView(i) } className="btn btn-primary"><i className="material-icons" >&#xe071;</i></Button>
                    </OverlayTrigger>

                    <OverlayTrigger
                      overlay={ <Tooltip id={`tooltip-right`} style={{position: 'absolute'}}> Edit </Tooltip> }>
                      <Button onClick={()=> handleEdit(i) } className=" btn-warning"><i className="material-icons" >&#xE254;</i></Button>
                    </OverlayTrigger>

                    <OverlayTrigger
                      overlay={ <Tooltip id={`tooltip-right`} style={{position: 'absolute'}} > Delete </Tooltip> }>
                      <Button  onClick={ ()=>handleShow(i) } className="btn btn-danger"><i className="material-icons" >&#xE872;</i></Button>
                    </OverlayTrigger>  	
                  </td>
                </tr> 
            )
          })}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>
            Delete Collection
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleDelete}>
            <Form.Group>
              <Form.Label>Are you sure you want to delete this collection?</Form.Label>
            </Form.Group>
            <Button   style={{float:"right"}} variant="danger" type="submit">Delete Collection</Button>
          </Form>
        </Modal.Body>
		  </Modal>    
    </>
  )
}
export default DashBoard