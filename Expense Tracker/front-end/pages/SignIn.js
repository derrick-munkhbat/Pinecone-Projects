export default function SignIn() {
  return (
    <div className="container">
      <h1>Welcome Back</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="username">Geld</label>
        <input type="text" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <button type="submit">Log in</button>
      </form>
      <p>
        Don't have an account? <a href="SignUp.js">Sign up</a>
      </p>
    </div>
  );
}
