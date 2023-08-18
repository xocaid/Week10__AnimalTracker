import { useState, useEffect } from 'react';
import SpeciesForm from './speciesForm';
import trash from "../../trash.png";
import edit from "../../edit.png";

function Species() {
  const [species, setSpecies] = useState([]);

  //Added for curentSpecies useState
  const values = { id: '', name: '', type: '', population: '',conservation_status:'',created_on:'' };
  //Edit Species Input
const [editingSpecies, setEditingSpecies] = useState(false);
const [currentSpecies, setCurrentSpecies] = useState(values);

  useEffect(() => {
    fetch("http://localhost:5001/species")
      .then((response) => response.json())
      .then((species) => {
        setSpecies(species);
      });
  }, []);

  //ADD SPECIES - EVENT HANDLER
  const handleAddSpecies = (newSingularSpecies) => {
    setSpecies((species) => [...species, newSingularSpecies]);
  };

  //DELETE SPECIES - EVENT HANDLER
  const handleDeleteSpeciesP = async (deleteSpeciesCallback) => {
    const response = await fetch(`http://localhost:5001/species/${deleteSpeciesCallback}`, {
      method: 'DELETE',
    })
    await response.json();
    const deleteSpeciesFunction = species.filter((i) => i.id !== deleteSpeciesCallback);
    setSpecies(deleteSpeciesFunction);
  };

  //EDIT SPECIES - EVENT HANDLER
  // function editSpecies(specie) {
  //   setEditingSpecies(true);
  //   setCurrentSpecies({ ...specie });
  // }
  // function updateSpecies(id, updatedSpecies) {
  //   setUsers(species.map((specie) => (specie.id === id ? updatedSpecies : specie)));
  // }
  // function handleEditSubmit(updatedSpecies) {
  //   updateSpecies(currentSpecies.id, updatedSpecies);
  //   setCurrentSpecies(values);
  //   setEditingSpecies(false);
  // }


  return (
    <div className="species">
      <h2> List of Species </h2>
      <table className="species-table">
        <thead>
          <tr className='table-heading'>
            <th>Species ID</th>
            <th>Species Name</th>
            <th>Type</th>
            <th> Population</th>
            <th>Conservation Status </th>
            <th>Created On </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {species.map((singSpecies, index) => (
            <tr key={index}>
              <td>{singSpecies.id} </td>
              <td>{singSpecies.name} </td>
              <td>{singSpecies.type} </td>
              <td> {singSpecies.population}</td>
              <td> {singSpecies.conservation_status}</td>
              <td> {singSpecies.created_on}</td>
              <td><img src={trash} className="trash-icon" alt="trash-icon" onClick={() => handleDeleteSpeciesP(singSpecies.id)} />
                <img src={edit} className="edit-icon" alt="edit-icon" />  </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Add Species
        
      </h3>
      <SpeciesForm addSpecies={handleAddSpecies} />
    </div>
  );
}

export default Species;