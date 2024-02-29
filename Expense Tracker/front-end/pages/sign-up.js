

export default function Home() {
  return (
    <div className="flex flex-col p-2 gap-2 w-10/12 m-auto items-center">
      <h1>Sign-Up page </h1>

      <label className="input input-bordered flex items-center gap-2">
        <input className="name" placeholder="Name" type="text" />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <input className="email" placeholder="Email" type="text" />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <input className="password" placeholder="Password" type="text" />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <input className="password" placeholder="Re-Password" type="text" />
      </label>

      <div>
        <button className="btn w-64 rounded-full">Sign-Up</button>
        <button className="btn w-64 rounded-full">Sign-In</button>
      </div>
    </div>
  );
}


