import { useState } from 'react';

const Form = (props) => {
  const [speciesForm, setSpeciesForm] = useState({
    name: "",
    type: "",
    population: "",
    created_on: "",
  });

  //create functions that handle the event of the user typing into the form
  const handleNameChange = (event) => {
    const speciesName = event.target.value;
    setSpeciesForm((species) => ({ ...species, name: speciesName }));
  };

  const handleTypeChange = (event) => {
    const speciesType = event.target.value;
    setSpeciesForm((species) => ({ ...species, type: speciesType }));
  };
  const handlePopulationChange = (event) => {
    const speciesPopulation = event.target.value;
    setSpeciesForm((species) => ({ ...species, population: speciesPopulation }));
  };
  const handleCreatedOnChange = (event) => {
    const speciesCreatedOn = event.target.value;
    setSpeciesForm((species) => ({ ...species, created_on: speciesCreatedOn }));
  };

  //A function to handle the post request
  const postSpecies = (newSpecies) => {
    return fetch("http://localhost:5001/species", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSpecies),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
        props.addSpecies(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postSpecies(speciesForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Name</label>
        <input
          type="text"
          id="add-name"
          placeholder="Name"
          required
          value={speciesForm.name}
          onChange={handleNameChange}
        />
        <br />

        <label>Type</label>
        <input
          type="text"
          id="add-type"
          placeholder="Type"
          required
          value={speciesForm.type}
          onChange={handleTypeChange}
        />
        <br />

        <label>Population</label>
        <input
          type="text"
          id="add-poopulation"
          placeholder="Population"
          required
          value={speciesForm.population}
          onChange={handlePopulationChange}
        />
        <br />

        <label>Created On</label>
        <input
          type="text"
          id="add-createdon"
          placeholder="CreatedOn"
          required
          value={speciesForm.created_on}
          onChange={handleCreatedOnChange}
        />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;