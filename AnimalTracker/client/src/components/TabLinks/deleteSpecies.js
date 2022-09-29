import { useState } from "react";

const DeleteSpecies = ({deleteSpeciesCallback}) => {

const [deleteSpeciesId, setSpeciesId] = useState('');

const handleDeleteSpecies = (e) => {
  e.preventDefault();
  deleteSpeciesCallback(deleteSpeciesId);
  setSpeciesId('');
}
//The delete information below is still needed whether delete (in Parent Component) is a button/icon because it needs an identifier.
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