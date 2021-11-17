import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Let's Connect!</h1>
      <div className="container-fluid">
        <div className="row">
          <form className="col-6">
            <div className="mb-3">
              <label for="FormControlInput" className="form-label">Email address</label>
              <input type="email" className="form-control" id="FormControlInput" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label for="FormControlTextarea" className="form-label">How can I help you?</label>
              <textarea className="form-control" id="FormControlTextarea" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-secondary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}