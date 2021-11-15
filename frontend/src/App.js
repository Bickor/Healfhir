import './App.css';
import React from "react";
import { Button } from 'react-bootstrap';
import data from "./data/mock.json";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import { useParams } from 'react-router-dom';

const patients = data;

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/patient/:slug" element={<Patient/>}/>
      </Routes>
    </Router>
    
  );
}

function Home() {

  return (
    
    <div>
      <header className="Home-header">
        <h1>HealthFHIR Dashboard</h1>
        <p>
          Welcome to our dashboard! Please search for your patient's name below:
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
            {Object.entries(patients).map(([slug, patient]) => (
              <tr key={slug}>
                <td>
                    <Link to={{pathname:`/patient/${slug}`}}>
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

function Patient() {

  const { slug } = useParams();
  const currPatient = patients[slug];

  if (!currPatient) {
    return <h2>Not Found</h2>
  }

  return (
      
      <div>
          <Link to="/">
              <Button
                  variant="btn btn-success"
                  style={{display: "flex", alignItems:'center', justifyContent:'left', marginLeft: 50, marginTop: 50}}>
                      Home page
              </Button>
          </Link>

          <h1>
              Patient Information   
          </h1>

          <h3> first: {currPatient.name.given} </h3>
          <h3> last: {currPatient.name.family} </h3>
          <p> address: {currPatient.address[0].text} </p>

      </div>
  );
}

export default App;
