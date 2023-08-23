import React from 'react';
import HomeNavbar from '../LandingPage/Navbar';

function Cat() {
    const containerStyle = {
        backgroundImage: 'url("4.png")', // Set the background image
        backgroundSize: 'cover', // Make sure the image covers the entire container
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
      };

  const cardStyle = {
    maxWidth: '600px',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
  };

  const cardImageContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center the image horizontally
    marginBottom: '1rem',
  };

  const cardImageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  const headingStyle = {
    color: '#FA2640',
    marginBottom: '0.5rem',
  };

  const iconStyle = {
    color: '#FF6219',
    fontSize: '3rem',
    marginBottom: '0.5rem',
  };

  const inputStyle = {
    width: '90%',
    padding: '0.75rem',
    marginBottom: '1.5rem', // Increased padding between input fields
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
  };

  const textareaStyle = {
    width: '90%',
    padding: '0.75rem',
    marginBottom: '1.5rem', // Increased padding between input fields
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
    resize: 'vertical',
  };

  const buttonStyle = {
    backgroundColor: '#FA2640',
    color: '#fff',
    padding: '0.75rem 2rem',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
  };

  return (
    <div>
      
      <div className="my-5" style={containerStyle}>
        <div className="contact-card" style={cardStyle}>
          <div className="row g-0">
            <div className="col-md-6">
              <div className="rounded-start w-100" style={cardImageContainerStyle}>
                <img
                  src="3.png" // Replace with your image URL
                  alt="contact"
                  style={cardImageStyle}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center mt-4">
                  <i
                    className="fas fa-envelope"
                    style={iconStyle}
                  />
                  <h1 className="h1 fw-bold mb-0" style={headingStyle}>
                    Contact Us
                  </h1>
                </div>
                <p className="fw-normal my-4 pb-3">
                  Have a question or feedback? We'd love to hear from you!
                </p>
                <input
                  className="form-control mb-4"
                  placeholder="Your Name"
                  style={inputStyle}
                  type="text"
                />
                <input
                  className="form-control mb-4"
                  placeholder="Email Address"
                  style={inputStyle}
                  type="email"
                />
                <textarea
                  className="form-control mb-4"
                  placeholder="Message"
                  style={textareaStyle}
                  rows="6" // Adjust the number of rows as needed
                />
                <button
                  className="mb-4 btn btn-dark"
                  style={buttonStyle}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cat;
