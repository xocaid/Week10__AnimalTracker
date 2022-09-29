import { useState, useEffect } from 'react';
import SpeciesForm from '../speciesForm';

function Species() {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/species")
      .then((response) => response.json())
      .then((species) => {
            setSpecies(species);
          });
  }, []);

  //ADD SPECIES
  const addSpecies = (newSingularSpecies) => {
    setSpecies((species) => [...species, newSingularSpecies]);
  };


    // const [editingUserId, setEditingUserId] = useState();

  return (
    <div className="species">
      <h2> List of Species </h2>
      <table class ="species-table">
        <thead>
          <tr>
            <th>Species Name</th>
            <th>Type</th>
            <th> Population</th>
            <th>Conservation Status </th>
            <th>Created On </th>
            <th>Edit Placeholder</th>

          </tr>
        </thead>
        <tbody>
        {species.map((singSpecies) => (
          <tr key={singSpecies.id}>
            <td>{singSpecies.name} </td>
            <td>{singSpecies.type} </td>
            <td> {singSpecies.population}</td>
            <td> {singSpecies.conservation_status}</td>
            <td> {singSpecies.created_on}</td>
            <td><button>Edit</button></td>
          </tr>
        ))}
        </tbody>
  </table>
      <SpeciesForm addSpecies={addSpecies} />
    </div>
  );
}

export default Species;