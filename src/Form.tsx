import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputFeedback, setInputFeedback] = useState("");

  function NameListener(e) {
    setInputName(e.target.value);
  }

  function EmailListener(e) {
    setInputEmail(e.target.value);
  }

  function FeedbackListener(e) {
    setInputFeedback(e.target.value);
  }

  function ButtonHandler() {
    setName(inputName);
    setEmail(inputEmail);
    setFeedback(inputFeedback);
  }

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-slate-400 min-h-screen">
      <label htmlFor="name" className="my-3">
        Name:{" "}
      </label>
      <input
        type="text"
        placeholder="What's your name?"
        value={inputName}
        onChange={NameListener}
        className="text-center border border-black w-[350px] h-[40px]"
      />
      <label htmlFor="email" className="my-3">
        Email:{" "}
      </label>
      <input
        type="email"
        placeholder="What's your email address?"
        value={inputEmail}
        onChange={EmailListener}
        className="text-center border border-black w-[350px] h-[40px]"
      />
      <label htmlFor="feedback" className="my-3">
        Feedback:{" "}
      </label>
      <textarea
        placeholder="Give us feedback!"
        value={inputFeedback}
        onChange={FeedbackListener}
        className="text-center w-[350px] h-[120px] border border-black"
      />
      <button
        onClick={ButtonHandler}
        className="hover:cursor-pointer border border-black my-3 p-3"
      >
        Submit
      </button>
      {name && email && feedback && (
        <>
          <div className="my-3 text-center space-y-5">
            <p>Hello {name}</p>
            <p>Your Email is: {email}</p>
            <p>Your feedback is: {feedback}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Form;
