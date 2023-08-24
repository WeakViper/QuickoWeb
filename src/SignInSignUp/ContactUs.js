import googleLogo from '../images/googleLogo.webp';
import RedLogo from "../images/RedLogo.png"
import "./login.css"
import backgroundImg from "../images/SignUpBackground.png"

function ContactUs() {

    const textareaStyle = {
        width: '90%',
        padding: '0.75rem',
        marginBottom: '1.5rem', // Increased padding between input fields
        border: '1px solid #ccc',
        borderRadius: '0.25rem',
        resize: 'vertical',
      };

  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Sign In</title>
      </head>
      <body style={{
        backgroundImage: `url(${backgroundImg})`, // Set background image
        backgroundSize: 'cover', // Stretch to cover the whole screen
        backgroundRepeat: 'no-repeat', // Prevent image repetition
        backgroundAttachment: 'fixed', // Keep the image fixed while scrolling
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
      }}>
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="row border rounded-5 p-3 bg-white shadow box-area">
            <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
            <div class="featured-image mb-3">
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                <img src={RedLogo} class="img-fluid imgBanner" alt = 'Sign Up Banner'/>
              </a>
            </div>
            </div>
            <div className="col-md-6 right-box">
              <div className="row align-items-center">
                <div className="header-text mb-4" style={{ color: '#FA2640' }}>
                  <h2>Contact Form</h2>
                  <p>How can we help you today?</p>
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Subject of Request" />
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Your Name" />
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Email Address" />
                </div>
                <div className="input-group mb-1">
                  <textarea
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Message"
                  style={textareaStyle}
                  rows="6" // Adjust the number of rows as needed
                />
                </div>
                <div className="input-group mb-3">
                  <button className="btn btn-lg btn-primary w-100 fs-6" style={{ backgroundColor: '#FA2640', border: 'none' }}>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default ContactUs;