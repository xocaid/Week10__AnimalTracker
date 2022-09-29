import { useState, useEffect } from 'react';
import SpeciesForm from '../speciesForm';
import trash from "../trash.png";

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

    //DELETE SPECIES - EVENT HANDLER
    const handleDeleteSpeciesP = async (deleteSpeciesCallback) => {
      const response = await fetch(`http://localhost:5001/species/${deleteSpeciesCallback}`, {
        method: 'DELETE',
      })
      await response.json();
      const deleteSpeciesFunction = species.filter((i) => i.id !== deleteSpeciesCallback);
      setSpecies(deleteSpeciesFunction);
    };

  return (
    <div className="species">
      <h2> List of Species </h2>
      <table className ="species-table">
        <thead>
          <tr>
            <th>Species Name</th>
            <th>Type</th>
            <th> Population</th>
            <th>Conservation Status </th>
            <th>Created On </th>
            <th></th>
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
            {/* <td><button onClick={() => handleDeleteSpecies1(singSpecies.id)}>Delete User</button></td> */}
            <td><img src={trash} className="trash-icon" onClick={() => handleDeleteSpeciesP(singSpecies.id)} /></td>
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