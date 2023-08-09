import "./SignIn.css"

const SignIn = () => {
  return (
    <div className="SignInForm">
      <div className="image-banner">
        <img src="del3.png" alt="Banner" />
      </div>
      <div className="signin-section">
        <h1></h1>
        <form id="signin-form">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Sign In</button>
        </form>
      </div>
      <script src="script.js"></script>
    </div>
  );
};
 
export default SignIn;

  
