import { useState, useReducer, useEffect } from "react";
import trash from "../trash.png";

const reducer = (state, action) => {
  console.log(action, 'this is the action');
  switch (action.type) {
    case 'editId':
      console.log('Logged if the editId action is being dispatched');
      return { ...state, id: action.payload };

    case 'editDateTime':
      console.log('Logged if the editDateTime action is being dispatched');
      return { ...state, date_time: action.payload };

    case 'editLocation':
      console.log('Logged if the editLocation action is being dispatched');
      return { ...state, location: action.payload };

    case 'editHealthy':
      console.log('Logged if the editHealthy action is being dispatched');
      return { ...state, healthy: action.payload };

    case 'editIndividualId':
      console.log('Logged if the editIndividualId action is being dispatched');
      return { ...state, individual_id: action.payload };

    case 'editCreatedOn':
      console.log('Logged if the editCreatedOn action is being dispatched');
      return { ...state, created_on: action.payload };

    case 'editEmail':
      return { ...state, email: action.payload };

    case 'clearForm':
      return {
        id: "",
        date_time: "",
        location: "",
        healthy: "",
        individual_id: "",
        created_on: "",
        email: ""
      };

    default:
      return state;
  }
};

const Sightings = () => {
  const [sightings, setSightings] = useState([]);

  const getSightings = async () => {
    const response = await fetch('http://localhost:5001/sightings');
    const sightings = await response.json();
    setSightings(sightings);
  };

  useEffect(() => {
    getSightings();
  }, []);

  //const initialState is associated with useReducer below(const [state, dispatch = useReducer(reducer, initialState)])
  //initialState needs to be declared for useReducer
  const initialState = {
    id: "",
    date_time: "",
    location: "",
    healthy: "",
    individual_id: "",
    created_on: "",
    email: ""
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //ADD NEW EVENT  - EVENT HANDLER
  const handleAddSightings = async (e) => {
    e.preventDefault();
    const newSightings = {
      id: state.id,
      date_name: state.date_time,
      location: state.location,
      healthy: state.healthy,
      individual_id: state.individual_id,
      created_on: state.created_on,
      email: state.email,
    };

    const response = await fetch('http://localhost:5001/sightings', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSightings)
    });
    const content = await response.json();
    setSightings([...sightings, content]);
    dispatch({ type: 'clearForm' })
  };

  //DELETE SIGHTINGS - EVENT HANDLER
  const handleDeleteSightings = async (deleteSightingsCallback) => {
    const response = await fetch(`http://localhost:5001/sightings/${deleteSightingsCallback}`, {
      method: 'DELETE',
    })
    await response.json();
    const deleteSightingssFunction = sightings.filter((i) => i.id !== deleteSightingsCallback);
    setSightings(deleteSightingssFunction);
  };


  return (
    <section className="sightings-page">
      <h2>Sightings Page</h2>
      <div>
        <h3>All Sightings</h3>
        <table className="sightings-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date and Time</th>
              <th>Location</th>
              <th>Healthy</th>
              <th>Individual ID</th>
              <th>Created On</th>
              <th>Email</th>
              <th></th>
              <th>Edit Placeholder</th>
            </tr>
          </thead>
          <tbody>
            {/* Display all Events here */}
            {sightings.map((sighting, index) => {
              return (
                <tr key={index}>
                  <td>{sighting.id} </td>
                  {/* <td>{sighting.date_time} </td> */}
                  <td>{new Date(sighting.date_time).toLocaleString()}</td>
                  <td>{sighting.location} </td>
                  <td>{sighting.healthy === true ? "True" : "False"} </td>
                  <td>{sighting.individual_id} </td>
                  {/* <td>{sighting.created_on} </td> */}
                  <td>{new Date(sighting.created_on).toLocaleString()}</td>
                  <td>{sighting.email} </td>
                  <td><img src={trash} className="trash-icon" onClick={() => handleDeleteSightings(sighting.id)} /></td>
                  <td><button>Edit</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="addsightingsdiv">
          <h3>Add Sightings</h3>
          <form id="add-sightings" action="#" onSubmit={handleAddSightings}>
            <fieldset>
              <label>ID: </label>
              <input
                type="text"
                id="editId"
                placeholder="Sightings ID"
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

              <label>Date/Time: </label>
              <input
                type="date"
                id="editDateTime"
                value={state.date_time}
                onChange={(e) =>
                  dispatch({
                    type: "editDateTime",
                    payload: e.target.value,
                  })
                }
              />
              <br />

              <label>Location: </label>
              <input
                type="text"
                id="editLocation"
                placeholder="Location"
                value={state.location}
                onChange={(e) =>
                  dispatch({
                    type: "editLocation",
                    payload: e.target.value,
                  })
                }
              />
              <br />

              <label>Healthy: </label>
              <input
                type="text"
                id="editHealthy"
                placeholder="True/False"
                value={state.healthy}
                onChange={(e) =>
                  dispatch({
                    type: "editHealthy",
                    payload: e.target.value,
                  })
                }
              />
              <br />

              <label>Individual ID: </label>
              <input
                type="text"
                id="editIndividualId"
                placeholder="Individual ID"
                value={state.individual_id}
                onChange={(e) =>
                  dispatch({
                    type: "editIndividualId",
                    payload: e.target.value,
                  })
                }
              />
              <br />
              <label>Created On: </label>
              <input
                type="datetime-local"
                id="editCreatedOn"
                value={state.created_on}
                onChange={(e) =>
                  dispatch({
                    type: "editCreatedOn",
                    payload: e.target.value,
                  })
                }
              />
              <br />
              <label>Email: </label>
              <input
                type="text"
                id="editEmail"
                placeholder="jsmith@gmail.com"
                value={state.email}
                onChange={(e) =>
                  dispatch({
                    type: "editEmail",
                    payload: e.target.value,
                  })
                }
              />
              <br />

            </fieldset>
            <input type="submit" value="Add Sighting" />
          </form>
        </div>
      </div>
    </section>
  )
}
export default Sightings;