import './App.css';
import React from "react";
import { Button } from 'react-bootstrap';
import data from "./data/mock.json";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import { useParams } from 'react-router-dom';

const patients = data;

function NewPatient() {
    return (
        <div>
            <Link to="/">
                <Button
                    variant="btn btn-success"
                    style={{display: "flex", alignItems:'center', justifyContent:'center', marginLeft: 50, marginTop: 50}}>
                        Home page
                </Button>
            </Link>

            <h1 style={{marginLeft:580, marginBottom: 60}}>
                Add new patient
            </h1>

            <form>
                <label style={{marginLeft:50, alignSelf:"center"}}>
                    First Name:
                    <input type="text" name="name"/>
                </label>
                
                <label style={{marginLeft:50,alignSelf:"center"}}>
                    Last Name:
                    <input type="text" name="name" />
                </label>

                <label style={{marginLeft:50, alignSelf:"center"}}
                    htmlFor="gender">Gender:
                </label>
                <select id="gender" name="gender">
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                </select>

                <button style={{marginLeft:50, alignSelf:"center"}}>Submit</button>
            </form>

        </div>
    )
}

function App() {

  return (

    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/patient/:slug" element={<Patient/>}/>
          <Route path="/newPatient" element={<NewPatient/>}/>
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
          <Link to={"/newPatient"}>
            <Button
                variant="btn btn-success"
                style={{display: "flex", alignItems:'center', justifyContent:'center', marginLeft: 580, marginTop: 250}}>
                Add new patient
            </Button>
          </Link>
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
                  style={{display: "flex", alignItems:'center', justifyContent:'center', marginLeft: 50, marginTop: 50}}>
                      Home page
              </Button>
          </Link>


          <h1 style={{marginLeft:580, marginBottom: 60}}>
              Patient Information   
          </h1>

          <h3 style={{marginLeft:50}}> First Name: {currPatient.name.given} </h3>
          <h3 style={{marginLeft:50}}> Lastname: {currPatient.name.family} </h3>
          <p style={{marginLeft:50}}> Address: {currPatient.address[0].text} </p>

      </div>
  );
}

export default App;
