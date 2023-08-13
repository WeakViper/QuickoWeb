import "./SignUp.css"

const SignUp = () => {
  return (
    <div className="SignUpForm">
      <div className="image-banner-sign">
        <img src="del3.png" alt="Banner" />
      </div>
      <div className="signin-section">
        <h1></h1>
        <form id="signin-form">
          <label className="label-sign" htmlFor="firstName">First Name</label>
          <input className="input-sign" type="text" id="firstName" name="firstName" required />
          <label htmlFor="lastName">Last Name</label>
          <input className="input-sign" type="text" id="lastName" name="lastName" required />
          <label htmlFor="email">Email</label>
          <input className="input-sign" type="email" id="email" name="email" required />
          <label className="label-sign" htmlFor="phoneNumber">Phone Number</label>
          <input className="input-sign" type="tel" id="phoneNumber" name="phoneNumber" required />

          <label htmlFor="password">Password</label>
          <input className="input-sign" type="password" id="password" name="password" required />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input className="input-sign" type="password" id="confirmPassword" name="confirmPassword" required />

          <button className="button-sign" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

