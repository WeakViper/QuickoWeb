
import logo from "../images/3.png"

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
} from 'mdb-react-ui-kit';

function Signup() {
  return (
    <MDBContainer fluid style={{ padding: 0, margin: 0 }}>
      <MDBRow className='d-flex justify-content-center align-items-center h-100' style={{ backgroundColor: "#FA2640", minHeight: '100vh' }}>
        <MDBCol col='12'>
          <MDBCard
            className='bg-white my-5 mx-auto'
            style={{
              borderRadius: '1rem',
              maxWidth: '500px',
              marginTop: '-100px'
            }}
          >
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
            <h2 className="fw-bold mb-2 text-center">
  <img src={logo} alt="Your Logo" style={{ maxWidth: '100%', height:'200px' }} />
</h2>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' />
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />
              <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form1' type='Confirm Password' />

              <MDBInput wrapperClass='mb-4' label='Phone Number' id='form1' type='Phone Number' />


              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md'>
                sign up
              </MDBBtn>

              <div className='text-center'>
                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size='sm' />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size='sm' />
                </MDBBtn>

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
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
