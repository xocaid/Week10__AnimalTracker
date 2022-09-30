import { useState, useReducer, useEffect } from "react";
import trash from "../trash.png";
import edit from "../edit.png";

const reducer = (state, action) => {
  console.log(action, 'this is the action');
  switch (action.type) {
    case 'editId':
      console.log('Logged if the editId action is being dispatched');
      return { ...state, id: action.payload };

    case 'editNickName':
      console.log('Logged if the editNickName action is being dispatched');
      return { ...state, nick_name: action.payload };

    case 'editSeenOn':
      console.log('Logged if the editSeenOn action is being dispatched');
      return { ...state, seen_on: action.payload };

    case 'editSpeciesId':
      return { ...state, species_id: action.payload };

    case 'clearForm':
      return {
        id: "",
        nick_name: "",
        seen_on: "",
        species_id: ""
      };

    default:
      return state;
  }
};

const Individuals = () => {
  const [individuals, setIndividuals] = useState([]);

  const getIndividuals = async () => {
    const response = await fetch('http://localhost:5001/individuals');
    const individuals = await response.json();
    setIndividuals(individuals);
  };

  useEffect(() => {
    getIndividuals();
  }, []);

  //const initialState is associated with useReducer below(const [state, dispatch = useReducer(reducer, initialState)])
  //initialState needs to be declared for useReducer
  const initialState = {
    id: "",
    nick_name: "",
    seen_on: "",
    species_id: ""
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //ADD NEW INDIVIDUAL  - EVENT HANDLER
  const handleAddIndivduals = async (e) => {
    e.preventDefault();
    const newIndividuals = {
      id: state.id,
      nick_name: state.nick_name,
      seen_on: state.seen_on,
      species_id: state.species_id
    };

    const response = await fetch('http://localhost:5001/individuals', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newIndividuals)
    });
    const content = await response.json();
    setIndividuals([...individuals, content]);
    dispatch({ type: 'clearForm' })
  };

  //DELETE EVENT  - EVENT HANDLER
  const handleDeleteIndividuals = async (deleteIndividualsCallback) => {
    const response = await fetch(`http://localhost:5001/individuals/${deleteIndividualsCallback}`, {
      method: 'DELETE',
    })
    await response.json();
    const deleteIndividualsFunction = individuals.filter((i) => i.id !== deleteIndividualsCallback);
    setIndividuals(deleteIndividualsFunction);
  }

  return (
    <section className="individuals-page">
      <h2>Individuals Page</h2>
      <div>
        <h3>All Individuals</h3>
        <table className="individuals-table">
          <thead>
            <tr className='table-heading'>
              <th>ID</th>
              <th>Nick Name</th>
              <th>Seen On</th>
              <th>Species ID</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Display all Individuals here */}
            {individuals.map((individual, index) => {
              return (
                <tr key={index}>
                  <td>{individual.id} </td>
                  <td> {individual.nick_name} </td>
                  <td>{individual.seen_on} </td>
                  <td>{individual.species_id} </td>
                  <td><img src={trash} className="trash-icon" alt="trash-icon" onClick={() => handleDeleteIndividuals(individual.id)} />
                    <img src={edit} className="edit-icon" alt="edit-icon" />  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="addindividualsdiv">
          <h3>Add Individuals</h3>
          <form id="add-individuals" className="formborder" action="#" onSubmit={handleAddIndivduals}>
            <fieldset>
              <label>ID: </label>
              <input
                type="text"
                id="editId"
                placeholder="Individuals ID"
                value={state.id}
                //Dispatch fx: dispatches an Action Object; when you update the state, call dispatch fx with Action Object
                //State is update by eventHandler or completing fetch request
                //dispatch(actionObject)
                // Action Object: property type, string describing what kind of state update reducer must do, in this case editId
                //Payload is useful information to be used by reducer and associated with Action Object
                onChange={(e) =>
                  dispatch({
                    type: "editId",
                    payload: e.target.value,
                  })
                }
              />
              <br />

              <label>Nick Name: </label>
              <input
                type="text"
                id="editNickName"
                value={state.nick_name}
                onChange={(e) =>
                  dispatch({
                    type: "editNickName",
                    payload: e.target.value,
                  })
                }
              />
              <br />

              <label>Seen On: </label>
              <input
                type="datetime-local"
                id="editSeenOn"
                placeholder="Seen On"
                value={state.seen_on}
                onChange={(e) =>
                  dispatch({
                    type: "editSeenOn",
                    payload: e.target.value,
                  })
                }
              />
              <br />

              <label>Species ID: </label>
              <input
                type="text"
                id="editSpeciesId"
                placeholder="Species ID"
                value={state.species_id}
                onChange={(e) =>
                  dispatch({
                    type: "editSpeciesId",
                    payload: e.target.value,
                  })
                }
              />
              <br />
            </fieldset>
            <input type="submit" value="Add Individual" />
          </form>
        </div>
      </div>
    </section>
  )
}
export default Individuals;