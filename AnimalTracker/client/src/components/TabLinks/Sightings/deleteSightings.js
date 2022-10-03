import { useState } from "react";

const DeleteSightings = ({deleteSightingsCallback}) => {

const [deleteSightingsId, setSightingsId] = useState('');

const handleDeleteSightingsC = (e) => {
  e.preventDefault();
  deleteSightingsCallback(deleteSightingsId);
  setSightingsId('');
}

  return (
    <div>
      <h3>Delete Sightings</h3>
      <form id="delete-sightings" action="#" onSubmit={handleDeleteSightingsC}>
        <fieldset>
          <label>Sightings ID: </label>
          <input 
          type="number" 
          min="1" 
          id="delete-sightings-id"
          value={deleteSightingsId}
          onChange={(e) => setSightingsId(e.target.value)}
          />
        </fieldset>
        <input 
        type="submit"/>
      </form>
    </div>
  )
}
export default DeleteSightings;