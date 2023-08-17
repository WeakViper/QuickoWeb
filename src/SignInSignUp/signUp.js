import React from 'react';
import FooterNavbar from './FooterNavbar';
const styles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto, Arial, sans-serif',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
  },
  imageBannersignin: {
    width: '75%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'none',
  },
  imageBannersigninImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  signinSection: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '25%', // Adjusted width
    height: '100%',
    backgroundColor: '#FA2640',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: '40px', // Adjusted font size
    color: '#fff9f9',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '20px', // Adjusted padding
    marginTop: '50px', // Adjusted margin
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px', // Adjusted margin
  },  
  label: {
    fontSize: '18px',
    color: '#fff9f9',
    marginBottom: '5px', // Adjusted margin
    width: '40%', // Adjusted width
  },
  input: {
    marginBottom: '10px', // Adjusted margin
    padding: '8px', // Adjusted padding
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    color: '#fffefe',
    transition: 'background-color 0.2s ease-in-out',
    width: '60%', // Adjusted width
  },
  button: {
    padding: '10px 20px', // Adjusted padding
    backgroundColor: '#cc0000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
    marginTop: '10px', // Adjusted margin
  },
  a: {
    marginLeft: '16px',
    textDecoration: 'none',
    padding: '6px',
    color: 'white',
  },
  aHover: {
    color: 'black',
  },
};




const SignUp = () => {
  return (
    <div style={styles.body}>
      <div style={styles.imageBannersignin}>
        <img style={styles.imageBannersigninImg} src="newdel.png" alt="Banner" />
      </div>
      

      <div style={styles.signinSection}>
      <h1 style={styles.h1}>Sign Up</h1>
        <form style={styles.form} id="signin-form">
          <label style={styles.label} htmlFor="firstName">First Name</label>
          <input style={styles.input} type="text" id="firstName" name="firstName" required />
          <label style={styles.label} htmlFor="lastName">Last Name</label>
          <input style={styles.input} type="text" id="lastName" name="lastName" required />
          <label style={styles.label} htmlFor="email">Email</label>
          <input style={styles.input} type="email" id="email" name="email" required />
          <label style={styles.label} htmlFor="phoneNumber">Phone Number</label>
          <input style={styles.input} type="tel" id="phoneNumber" name="phoneNumber" required />

          <label style={styles.label} htmlFor="password">Password</label>
          <input style={styles.input} type="password" id="password" name="password" required />
          <label style={styles.label} htmlFor="confirmPassword">Confirm Password</label>
          <input style={styles.input} type="password" id="confirmPassword" name="confirmPassword" required />

          <button style={styles.button} type="submit">Sign Up</button>
        </form>
        <FooterNavbar />
      </div>
      
    </div>
  );
};
export default SignUp;
