import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

 const Note=(props) => {

  function handleDelete() { props.onDelete(props.id) }
  function handleEdit() { props.onEdit(props.id) }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}><DeleteIcon/></button>
      <button onClick={handleEdit}><EditIcon/></button>
     
    </div>
  );
}

export default Note
