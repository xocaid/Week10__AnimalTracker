import { useState } from "react";



function EditSpecies({species, editSpecies, deleteSpecies})

  // function editSpecies(speciesF) {
  //   console.log(speciesF);
  //   // set editing to true
  //   setEditingSpecies(true);
  //   // set the currentUser to the user that was clicked
  //   // setCurrentUser({ id: user.id, name: user.name, username: user.username })
  //   setCurrentSpecies({ ...speciesF });
  // }

  // function updateSpecies(id, updatedSpeciesF) {
  //   setUsers(species.map((speciesF) => (speciesF.id === id ? updatedSpeciesF : speciesF)));
  // }
  
  // const handleAddSubmit = (newUser) => {
  //   setUsers([...users, newUser]);
  // };

  // function handleEditSubmit(updatedUser) {
  //   updateSpecies(currentUser.id, updatedUser);
  //   setCurrentUser({
  //     id: null,
  //     name: '',
  //     email: ''
  //   });
  //   setIsEditingUser(false);
  // }

  return (
    <section className="user-management">
      <table class="users-table">
        <thead>
          <tr>
            <th>Species ID</th>
            <th>Species Name</th>
            <th>Type</th>
            <th>Population</th>
            <th>Conservation Status</th>
            <th>Created On</th>
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
              <td><img src={trash} className="trash-icon" alt="trash-icon" onClick={() => deleteSpecies(specie)}/>
                <img src={edit} className="edit-icon" alt="edit-icon" onClick={() => editSpecies(specie)}/>  </td>
            </tr>
          ))}
        </tbody>
      </table>
{/* 
      <!--  conditional rendering -->
      {isEditingUser ? (

        <SpeciesForm
          handleSubmit={handleEditSubmit}
          values={currentUser}
          buttonText="Update"
        />
      ) : (
        <SpeciesForm
          handleSubmit={handleAddSubmit}
          values={values}
          buttonText="Add" />
      )} */}
    </section>
  );
export default EditSpecies;