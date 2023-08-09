import "./SignUp.css"

const SignUp = () => {
  return (
    <div className="SignUpForm">
      <div className="image-banner">
        <img src="del3.png" alt="Banner" />
      </div>
      <div className="signin-section">
        <h1></h1>
        <form id="signin-form">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

