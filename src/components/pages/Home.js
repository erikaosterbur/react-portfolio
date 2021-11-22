import React from 'react';
import Headshot from '../../images/erika.JPG';

export default function Home() {
  return (
    <div className="m-4">
      <div className="row">
        <div className="col-sm-12 col-lg-5">
          <img src={Headshot} alt="headshot of Erika Osterbur"
            style={{
            width: "80%",
            height: "auto",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            border: "6px solid white"}}
            />
          </div>
          <div className="col-sm-12 col-lg-7">
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
