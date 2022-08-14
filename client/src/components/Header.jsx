/*
------Header component------
-Allow user to navigate the website
-Allow a user to logout
*/
import React from "react";
import {Button, Navbar,Container, Nav} from 'react-bootstrap';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {useLogout} from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext";

 const Header=() =>{
    
  const {user} = useAuthContext()
  const {logout} = useLogout()
  
  const handleClick = ()=>{
    logout()
  }
  return (
    <Navbar>
      <Container fluid style={{marginBottom:10, backgroundColor:'#f5ba13', color:'black' }}>
        <Navbar.Brand style={{fontSize:30}}> <DashboardIcon style={{fontSize:30}}/> Study Cards</Navbar.Brand>
        <Navbar.Toggle />
        
        <Nav className="me-auto">
        { user && (<>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
        </>)}
        </Nav>
        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             { user && ( <div> <span>Signed in as: {user.username} </span> 
            <Button style={{marginLeft:10}} onClick={handleClick}>Logout</Button> </div>)}
            
            <Nav className="me-auto">
             {!user && (<> 
             <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            </>)} 
            </Nav>

          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )}

  export default Header
