

export default function Home() {
  return (
    <main className="flex flex-col p-2 gap-2 w-10/12 m-auto items-center">
      <h1>Sign-In page</h1>

      <label className="input input-bordered flex items-center gap-2">
        <input className="email" placeholder="Email" type="text" />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <input className="password" placeholder="Password" type="text" />
      </label>

      <div>
        <button className="btn w-64 rounded-full">Sign-In</button>
        <button className="btn w-64 rounded-full">Sign-Up</button>
      </div>
    </main>
  );
}
