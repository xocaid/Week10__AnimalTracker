import { useState } from "react";

const DeleteIndividuals = ({deleteSpeciesCallback}) => {

const [deleteIndividualsId, setIndividualsId] = useState('');

const handleDeleteIndividualsC = (e) => {
  e.preventDefault();
  deleteSpeciesCallback(deleteIndividualsId);
  setIndividualsId('');
}

  return (
    <div>
      <h3>Delete Individuals</h3>
      <form id="delete-individuals" action="#" onSubmit={handleDeleteIndividualsC}>
        <fieldset>
          <label>Individuals ID: </label>
          <input 
          type="number" 
          min="1" 
          id="delete-individuals-id"
          value={deleteIndividualsId}
          onChange={(e) => setIndividualsId(e.target.value)}
          />
        </fieldset>
        <input 
        type="submit"/>
      </form>
    </div>
  )
}
export default DeleteIndividuals;