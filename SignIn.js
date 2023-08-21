import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const styles = {
  body: {
    backgroundColor: "#FA2640",
  },
};

function App() {
  return (
    <MDBContainer fluid style={styles.body}>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">
                <img src="3.png" alt="Your Logo" style={{ maxWidth: '100%', height:'200px' }} />
              </h2>

              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <MDBBtn size='lg'>
                Login
              </MDBBtn>

              <hr className="my-4" />

              <MDBRow>
                <MDBCol col='6'>
                  <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
                    <MDBIcon fab icon="google" className="mx-2"/>
                    Sign in with Google
                  </MDBBtn>
                </MDBCol>
                <MDBCol col='6'>
                  <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                    <MDBIcon fab icon="facebook-f" className="mx-2"/>
                    Sign in with Facebook
                  </MDBBtn>
                </MDBCol>
              </MDBRow>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default App;
