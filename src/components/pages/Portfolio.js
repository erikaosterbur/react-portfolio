import React from 'react';
import PetMed from '../../images/petmed.png';
import Recipes from '../../images/recipes.jpg';
import Weather from '../../images/weather.png';

export default function Portfolio() {
  return (
    <div className="m-4">
      <h1 className="d-flex justify-content-center">Portfolio of Work</h1>
      <div className="row d-flex justify-content-center">
          <div className="card m-2" style={{width: "18rem"}}>
            <img src={PetMed} className="card-img-top" alt="pet dashboard displaying pets of user" />
            <div className="card-body">
              <h5 className="card-title">PetMed</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://github.com/erikaosterbur/pet-tracker-app.git" className="btn btn-secondary">View on GitHub</a>
            </div>
          </div>
          <div className="card m-2" style={{width: "18rem"}}>
            <img src={Recipes} className="card-img-top" alt="pet dashboard displaying pets of user" />
            <div className="card-body">
              <h5 className="card-title">Really Radical Recipes</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://github.com/erikaosterbur/pet-tracker-app.git" className="btn btn-secondary">View on GitHub</a>
            </div>
          </div>
          <div className="card m-2" style={{width: "18rem"}}>
            <img src={Weather} className="card-img-top" alt="pet dashboard displaying pets of user" />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://github.com/erikaosterbur/pet-tracker-app.git" className="btn btn-secondary">View on GitHub</a>
            </div>
          </div>
      </div>
    </div>
  );
}