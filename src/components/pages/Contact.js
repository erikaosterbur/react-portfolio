import React from 'react';

export default function Contact() {
  return (
    <div className="m-4">
      <h1 className="d-flex justify-content-center"><span>Let's Connect!</span></h1>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <form className="col-10 col-md-8 col-lg-6">
           <div className="mb-3">
              <label htmlFor="FormControlInputName" className="form-label">Your name</label>
              <input type="name" className="form-control" id="FormControlInputName" placeholder="Jane Doe" />
            </div>
            <div className="mb-3">
              <label htmlFor="FormControlInputEmail" className="form-label">Your email address</label>
              <input type="email" className="form-control" id="FormControlInputEmail" placeholder="janedoe@mail.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="FormControlTextarea" className="form-label">How can I help you?</label>
              <textarea className="form-control" id="FormControlTextarea" rows="3"></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-secondary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}