import React from 'react';
import SectionTitle from './SectionTitle';
import $ from 'jquery';

/**
 * Validate contact form
 */
var handleSubmit = (event) => {
  event.preventDefault();

  var form = document.getElementsByClassName('needs-validation')[0];
  form.classList.add('was-validated');
  if (form.checkValidity() === false) {
    return;
  }

  // Submit contact form data to server
  fetch('/submit', {
    method: 'POST',
    mode: 'cors',
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify($('#contact-form').serializeArray()),
  }).then((res) => {
    // Show message sent dialog
    document.getElementById('contactAlert').classList.remove("d-none");
    document.getElementById('contactAlert').classList.add("d-block");
    document.getElementById('contactAlert').classList.add("animated");
    document.getElementById('contactAlert').classList.add("bounceInUp");
    document.getElementById('contact-form').reset();
    form.classList.remove('was-validated');
    return res.ok;
  });
}

/**
 * Contact section
 */
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
          <div className="px-md-4 pb-3 wow fadeIn" data-wow-delay="1.0s">
            Let's get in touch! 
            <br /> 
            Use the form below, or email me directly at <a href="mailto:ndyoung96@gmail.com">ndyoung96@gmail.com</a>.
            <br />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 col-xl-4  md-auto justify-content-center text-center">
          <form className="needs-validation mx-3 mx-md-0" id="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input type="text" className="form-control wow flipInX" data-wow-delay="1.4s" id="nameInput" name="senderName" placeholder="Name (required)" required />
              <div className="invalid-feedback">
                Please include your name!
              </div>
            </div>
            <div className="form-group">
              <input type="email" className="form-control wow flipInX" data-wow-delay="1.8s" id="emailInput" name="senderEmail" aria-describedby="emailHelp" placeholder="Email address (optional)" />
            </div>
            <div className="form-group">
              <textarea type="text" className="form-control wow flipInX" data-wow-delay="2.2s"  id="textInput" name="senderMessage" placeholder="Message (required)" required />
              <div className="invalid-feedback">
                I need a message!
            </div>
            </div>
            <button type="submit" className="btn btn-secondary wow fadeIn" data-wow-delay="2.5s" >Submit</button>
            <small id="submitHelp" className="form-text text-muted wow fadeIn" data-wow-delay="4s">Your secrets are safe with me.</small>
          </form>
        </div>
      </div>
      <div id="contactAlert" className="alert alert-success alert-dismissible d-none fade show mx-2 text-center" role="alert" style={{ position: 'fixed', right: '0', bottom: '0' }}>
        <strong>Thanks for the message!</strong> I'll get back to you ASAP!
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}