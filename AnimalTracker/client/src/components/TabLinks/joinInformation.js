import { useState, useEffect } from 'react';
// import trash from "../trash.png"; Not in use yet

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
      <table className="join-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th> Type</th>
            <th>Nickname </th>
            <th>Location</th>
            <th>Healthy</th>
            <th>Email</th>
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
              <td> {join.healthy}</td>
              <td>{join.email}</td>
              <td><button>Maybe Delete/Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default JoinedInformation;