import { useState, useEffect } from 'react';
import trash from "../trash.png";
import edit from "../edit.png";

function JoinedInformation() {
  const [joinedInfo, setJoinedInfo] = useState([]);

  const getJoined = async () => {
    const response = await fetch(`http://localhost:5001/joinTable`);
    const join = await response.json();
    setJoinedInfo(join);
  };

  useEffect(() => {
    getJoined();
  }, []);


  return (
    <div className='joined-table'>
      <table className="summary-table">
        <thead>
          <tr className='table-heading'>
            <th>Species ID</th>
            <th>SpeciesName</th>
            <th> Species Type</th>
            <th>Individuals Name </th>
            <th>Location</th>
            <th>Healthy</th>
            <th>Individuals Email</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          {joinedInfo.map((join, index) => (
            <tr key={index}>
              <td>{join.id} </td>
              <td>{join.name} </td>
              <td>{join.type} </td>
              <td> {join.nick_name}</td>
              <td> {join.location}</td>
              <td> {join.healthy === true ? "True" : "False"}</td>
              <td>{join.email}</td>
              <td><img src={trash} className="trash-icon" alt="trash-icon" />
                <img src={edit} className="edit-icon" alt="edit-icon" /> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default JoinedInformation;