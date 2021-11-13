import data from "../data/mock.json";
import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

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
                <td>
                    <Link to={{pathname:"/patient", state: {example: true}}}>
                        {patient.name.given + " " + patient.name.family}
                    </Link>
                </td>
                <td>{patient.gender}</td>
                <td>{patient.birthDate}</td>
                <td>{patient.identifier.map((p) => p.assigner.display)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>

      <form>
            <Button
                variant="btn btn-success"
                style={{display: "flex", alignItems:'center', justifyContent:'center', marginLeft: 580, marginTop: 250}}>
                Add new patient
            </Button>
      </form>

    </div>
  );
}

export default Home;
