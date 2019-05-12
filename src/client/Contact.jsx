import React from 'react';
import SectionTitle from './SectionTitle';
import $ from 'jquery';

// Contact form submission validation
var handleSubmit = (event) => {
  event.preventDefault();

  var form = document.getElementsByClassName('needs-validation')[0];
  form.classList.add('was-validated');
  if (form.checkValidity() === false) {
    return;
  }

  fetch('/submit', {
    method: 'POST',
    mode: 'cors',
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify($('#contact-form').serializeArray()),
  }).then((res) => {
    if (res.ok) {
      document.getElementById('contactAlert').classList.add("d-block");
    }
    return res.ok;
  });
}

export default function Contact(props) {
  return (
    <div style={{backgroundColor: 'white'}}>
      <div id="contact" style={{ position: 'relative', top: '-66px', left: '0' }}></div>
      <div className="row justify-content-center">
        <div className="col justify-content-center text-center">
          <SectionTitle id="sectionTitleContact" text="CONTACT" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col justify-content-center text-center">
          <div className="px-md-4 pb-3">Questions? Offers? Just want to say hi?</div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 col-xl-4  md-auto justify-content-center text-center">
          <form className="needs-validation mx-3 mx-md-0" id="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input type="text" className="form-control" id="nameInput" name="senderName" placeholder="Name (required)" required />
              <div className="invalid-feedback">
                Please include your name!
            </div>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="emailInput" name="senderEmail" aria-describedby="emailHelp" placeholder="Email address (optional)" />
            </div>
            <div className="form-group">
              <textarea type="text" className="form-control" id="textInput" name="senderMessage" placeholder="Message (required)" required />
              <div className="invalid-feedback">
                I need a message!
            </div>
            </div>
            <button type="submit" className="btn btn-secondary">Submit</button>
            <small id="submitHelp" className="form-text text-muted">Your secrets are safe with me.</small>
          </form>
        </div>
      </div>
      <div id="contactAlert" className="alert alert-success alert-dismissible d-none fade show mx-2 text-center" role="alert" style={{ position: 'fixed', right: '0', bottom: '0' }}>
        <strong>Message sent!</strong> Thanks for the message &mdash; I'll get back to you ASAP!
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}