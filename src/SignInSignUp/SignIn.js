import FooterNavbar from "./FooterNavbar";
const styles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto, Arial, sans-serif',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    position: "relative",
    alignItems: 'center',
  },
  imageBannersignin: {
    width: '70%',
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
    width: '30%',
    height: '100%',
    backgroundColor: '#FA2640',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: '60px',
    color: '#fff9f9',
    marginBottom: '10px',
    paddingBottom: '100px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '200px',
  },
  label: {
    fontSize: '18px',
    color: '#fff9f9',
    marginBottom: '10px',
  },
  input: {
    marginBottom: '20px',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    color: '#fffefe',
    transition: 'background-color 0.2s ease-in-out',
    width: '200px',
  },
  inputFocus: {
    outline: 'none',
    backgroundColor: '#e0e0e0',
  },
  labelForm: {
    fontSize: '20px',
    color: 'white',
    marginBottom: '10px',
    width: '40px',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#cc0000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
  },
  buttonHover: {
    backgroundColor: '#ff4d4d',
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


const SignIn = () => {
  return (
    <div style={styles.body} className="SignInForm">
      {/* Background image */}
      <div style={styles.imageBannersignin}>
        <img src="newdel.png" alt="Banner" style={styles.imageBannersigninImg} />
      </div>
      
      {/* Sign in section */}
      <div style={styles.signinSection}>
        <h1 style={styles.h1}>Sign In</h1>
        <form id="signin-form" style={styles.form}>
          <label htmlFor="username" style={styles.label}>Username</label>
          <input type="text" id="username" name="username" style={styles.input} required />
          <label htmlFor="password" style={styles.label}>Password</label>
          <input type="password" id="password" name="password" style={styles.input} required />
          <button type="submit" style={styles.button}>Sign In</button>
        </form>
      </div>
      <FooterNavbar />
    </div>
  );
};

export default SignIn;

  
