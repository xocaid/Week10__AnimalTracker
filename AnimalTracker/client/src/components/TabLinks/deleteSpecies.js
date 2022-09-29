import { useState } from "react";

const DeleteSpecies = ({deleteSpeciesCallback}) => {

const [deleteSpeciesId, setSpeciesId] = useState('');

const handleDeleteSpecies = (e) => {
  e.preventDefault();
  deleteSpeciesCallback(deleteSpeciesId);
  setSpeciesId('');
}

  return (
    <div>
      <h3>Delete Species</h3>
      <form id="delete-species" action="#" onSubmit={handleDeleteSpecies}>
        <fieldset>
          <label>Event ID: </label>
          <input 
          type="number" 
          min="1" 
          id="delete-species-id"
          value={deleteSpeciesId}
          onChange={(e) => setSpeciesId(e.target.value)}
          />
        </fieldset>
        <input 
        type="submit"/>
      </form>
    </div>
  )
}
export default DeleteSpecies;