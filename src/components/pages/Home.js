import React from 'react';
import Headshot from '../../images/profile-pic.jpg';
import Badge from "../../images/badge.png";

export default function Home() {
  return (
    <div className="m-4">
      <div className="row">
        <div className="col-sm-12 col-lg-5">
          <img id="headshot" src={Headshot} alt="headshot of Erika Osterbur" />
          </div>
          <div className="col-sm-12 col-lg-7">
            <div className="d-flex">
              <img id="badge" src={Badge} alt="U of M Coding Badge"></img>
            </div>
              <div className="card m-3">
                <div className="card-body">
                 Hi there!
                    <ul>
                      <li>
                        Pronouns: she/her
                      </li>
                      <li>
                        Former teacher
                      </li>
                      <li>
                        Bilingual in English & Spanish
                      </li>
                      <li>
                        Full stack coding bootcamp certificate from the University of Minnesota - December 1, 2021
                      </li>
                      <li>
                        I’m currently learning React.js
                      </li>
                      <li>
                        Front end web development is my specialty
                      </li>
                    </ul>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}
