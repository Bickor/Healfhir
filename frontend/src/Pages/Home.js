import data from "../data/mock.json";
import React, { useState } from "react";


function Home() {

  const [patients, setPatient] = useState(data);

  return (
    
    <div>
      <header className="Home-header">
        <h1>HealthFHIR Dashboard</h1>
        <p>
          Welcome to our dashboard please search for your patient's name below:
        </p>

      </header>

      <div className="Home-container">
        <table>
          <thead>
            <th>Name</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Healthcare Provider</th>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr>
                <td>{patient.name.given + " " + patient.name.family}</td>
                <td>{patient.gender}</td>
                <td>{patient.birthDate}</td>
                <td>{patient.identifier.map((p) => p.assigner.display)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      

    </div>
  );
}

export default Home;
