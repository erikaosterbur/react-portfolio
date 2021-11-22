import React from 'react';
import PetMed from '../../images/petmed.png';
import Recipes from '../../images/recipes.jpg';
import Weather from '../../images/weather.png';
import Team from '../../images/team.png';
import Blog from '../../images/tech-blog.png';
import PortfolioPage from '../../images/portfolio.png';

export default function Portfolio() {
  return (
    <div className="m-4">
      <h1 className="d-flex justify-content-center"><span>Portfolio</span></h1>
      <div className="row d-flex justify-content-center">
        <div className="card m-2 col-10 col-md-5 col-lg-3">
              <img src={PetMed} className="card-img-top" alt="pet dashboard displaying pets of user" />
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center" style={{fontWeight: "bold"}}>PetMed</h5>
                <ul className="card-text">
                      <li>
                        HTML + Handlebars
                      </li>
                      <li>
                        Custom CSS + Bootstrap + Materialize
                      </li>
                      <li>
                        JavaScript
                      </li>
                      <li>
                        Express
                      </li>
                      <li>
                        MySQL + Sequelize
                      </li>
                      <li>
                        Heroku
                      </li>
                </ul>
                <a href="https://github.com/erikaosterbur/pet-tracker-app.git" className="btn btn-secondary m-1 d-flex justify-content-center">View on GitHub</a>
                <a href="https://group-1-pet-tracker.herokuapp.com/" className="btn btn-dark m-1 d-flex justify-content-center">View Deployed App</a>
              </div>
            </div>
            <div className="card m-2 col-10 col-md-5 col-lg-3">
              <img src={Recipes} className="card-img-top" alt="recipe search page" />
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center" style={{fontWeight: "bold"}}>Really Radical Recipes</h5>
                <ul className="card-text">
                  <li>
                    HTML
                  </li>
                  <li>
                    Custom CSS + Bootstrap + Animate.CSS
                  </li>
                  <li>
                    JavaScript + jQuery
                  </li>
                  <li>
                    Spoonacular API
                  </li>
                </ul>
                <a href="https://github.com/Preston0214/really-radical-recipes.git" className="btn btn-secondary m-1 d-flex justify-content-center">View on GitHub</a>
                <a href="https://preston0214.github.io/really-radical-recipes/index.html" className="btn btn-dark m-1 d-flex justify-content-center">View Deployed App</a>
              </div>
            </div>
            <div className="card m-2 col-10 col-md-5 col-lg-3">
              <img src={Weather} className="card-img-top" alt="weather dashboard page" />
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center" style={{fontWeight: "bold"}}>Weather Dashboard</h5>
                <ul className="card-text">
                  <li>
                    HTML
                  </li>
                  <li>
                    CSS + Bootstrap
                  </li>
                  <li>
                    JavaScript + jQuery
                  </li>
                  <li>
                    OpenWeather API
                  </li>
                </ul>
                <a href="https://github.com/erikaosterbur/weather-dashboard.git" className="btn btn-secondary m-1 d-flex justify-content-center">View on GitHub</a>
                <a href="https://erikaosterbur.github.io/weather-dashboard/" className="btn btn-dark m-1 d-flex justify-content-center">View Deployed App</a>
              </div>
            </div>
            <div className="card m-2 col-10 col-md-5 col-lg-3">
              <img src={Team} className="card-img-top" alt="page featuring team members with their information" />
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center" style={{fontWeight: "bold"}}>Team Profile Generator</h5>
                <ul className="card-text">
                  <li>
                    HTML
                  </li>
                  <li>
                    CSS + Bootstrap
                  </li>
                  <li>
                    JavaScript
                  </li>
                  <li>
                    Node.js
                  </li>
                  <li>
                    Jest
                  </li>
                  <li>
                    Inquirer
                  </li>
                </ul>
                <a href="https://github.com/erikaosterbur/weather-dashboard.git" className="btn btn-secondary m-1 d-flex justify-content-center">View on GitHub</a>
                <a href="https://erikaosterbur.github.io/weather-dashboard/" className="btn btn-dark m-1 d-flex justify-content-center">View Deployed App</a>
              </div>
            </div>
            <div className="card m-2 col-10 col-md-5 col-lg-3">
              <img src={PortfolioPage} className="card-img-top" alt="portfolio homepage" />
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center" style={{fontWeight: "bold"}}>Professional Portfolio</h5>
                <ul className="card-text">
                  <li>
                    HTML
                  </li>
                  <li>
                    CSS + Bootstrap
                  </li>
                  <li>
                    JavaScript
                  </li>
                  <li>
                    React
                  </li>
                </ul>
                <a href="https://github.com/erikaosterbur/react-portfolio.git" className="btn btn-secondary m-1 d-flex justify-content-center">View on GitHub</a>
              </div>
            </div>
            <div className="card m-2 col-10 col-md-5 col-lg-3">
              <img src={Blog} className="card-img-top" alt="blog homepage" />
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center" style={{fontWeight: "bold"}}>Tech Blog</h5>
                <ul className="card-text">
                  <li>
                    HTML
                  </li>
                  <li>
                    CSS + Bootstrap
                  </li>
                  <li>
                    JavaScript
                  </li>
                  <li>
                    Express
                  </li>
                  <li>
                    MySQL + Sequelize
                  </li>
                  <li>
                    Heroku
                  </li>
                </ul>
                <a href="https://github.com/erikaosterbur/MVC-tech-blog.git" className="btn btn-secondary m-1 d-flex justify-content-center">View on GitHub</a>
                <a href=" https://erika-osterbur-tech-blog.herokuapp.com/" className="btn btn-dark m-1 d-flex justify-content-center">View Deployed App</a>
              </div>
            </div>
        </div>
    </div>
  );
}