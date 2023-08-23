import "./login.css"
import backgroundImg from "../images/SignUpBackground.png"

function AddAddress() {
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
        <title>New Address</title>
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
              <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                  <div className="header-text mb-4">
                    <h2 className='h3'>Add a New Address</h2>
                    <p>Time to tell us where to deliver!</p>
                  </div>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Full Name" />
                  </div>

                  <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Phone Number" />
                  </div>

                  <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Street Address" />
                  </div>

                  <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Unit/apartment no." />
                  </div>

                  <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="City" />
                  </div>

                  <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="State" />
                  </div>

                  <div className="input-group mb-4">
                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Postal Code" />
                  </div>
                  
                  <div className="input-group mb-3">
                    <button className="btn btn-lg btn-primary w-100 fs-6 rounded-pill">Submit</button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
      </body>
    </html>
  );
}

export default AddAddress;
