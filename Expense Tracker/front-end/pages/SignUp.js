export default function SignUp() {
  return (
    <div className="container">
      <h1>Create Geld account</h1>
      <p>Sign up below to create your Wallet account</p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <label htmlFor="confirmPassword">Re-assword</label>
        <input type="password" id="confirmPassword" />

        <button type="submit">Sign up</button>
      </form>
      <p>
        Already have an account? <a href="SignIn.js">Sign in</a>
      </p>
    </div>
  );
}
