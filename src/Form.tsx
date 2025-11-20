import { use, useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  function ButtonHandler(e) {
    e.preventDefault();
    setShowMsg(true);
  }

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-black text-white text-4xl font-bold">
      <h1 className="mb-3">React Form</h1>

      <form>
        <label className="text-2xl pr-3">Name</label>
        <input
          type="text"
          placeholder="What's your name?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={ButtonHandler}>Submit</button>
      </form>
      {showMsg && (
        <>
          <p>Hello {name}</p>
          <p>Your email is: {email}</p>
        </>
      )}
    </div>
  );
}

export default Form;
