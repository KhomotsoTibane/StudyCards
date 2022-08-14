import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Footer from "./components/Footer"
import DashBoard from "./pages/DashBoard";
import CreateNote from "./pages/CreateNote";
import ViewNotes from "./pages/ViewNotes";
import Header from "./components/Header";
import EditNotes from "./pages/EditNotes";
import NotFound from "./pages/NotFound";

function App() {
  const { user } = useAuthContext()
  return (
   <>
        <BrowserRouter>
          <Header/>
          <Routes>
              <Route exact path="/" element={user ? <Navigate to="/home" /> : <Login/>} />
              <Route exact path="/register" element={<Register/>} />
              <Route exact path="/home"   element={!user ? <Navigate to="/" /> : <DashBoard/>} />
              <Route exact path="/create" element={<CreateNote/>}/>
              <Route exact path="/view"   element={!user ? <Navigate to="/" /> : <ViewNotes/>}/>
              <Route exact path="/edit"   element={!user ? <Navigate to="/" /> : <EditNotes/>}/>
              <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
    <Footer/>
   </>
  );
}

export default App;
