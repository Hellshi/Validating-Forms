import { useState, useEffect } from "react";
const SimpleInput = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [ClassName, setClassName] = useState("name");
  const [ClassEmail, setClassEmail] = useState("email");
  const [errorMessageName, setErrorMessageName] = useState(true);
  const [errorMessageEmail, setErrorMessageEmail] = useState(true);

  const nameIsValid = inputName.trim() !== "";
  const emailIsValid =
    (inputEmail.trim() !== "" &&
      inputEmail.includes("@") &&
      inputEmail.includes(".com")) ||
    inputEmail.includes(".com.br");

  useEffect(() => {
    if (nameIsValid && emailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [nameIsValid, emailIsValid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      inputName,
      inputEmail,
    });

    setInputEmail("");
    setInputName("");
  };

  const handleEmailInput = (e) => {
    setInputEmail(e.target.value);
    setErrorMessageEmail(true);
  };

  const handleNameInput = (e) => {
    setInputName(e.target.value);
    setErrorMessageName(true);
  };

  const handleOnFocus = (IsValid, className) => {
    if (!IsValid) {
      if (className === "Name") {
        setClassName("invalid");
        setErrorMessageName(false);
      } else {
        setClassEmail("invalid");
        setErrorMessageEmail(false);
      }
    } else {
      setClassName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          className={ClassName}
          onBlur={() => {
            handleOnFocus(nameIsValid, "Name");
          }}
          onChange={handleNameInput}
          value={inputName}
          type="text"
          id="name"
        />
        {!errorMessageName ? (
          <p className="error-text">'Type an valid name'</p>
        ) : (
          ""
        )}
        <label htmlFor="email">Your Email</label>
        <input
          className={ClassEmail}
          onBlur={() => {
            handleOnFocus(emailIsValid, "Email");
          }}
          onChange={handleEmailInput}
          value={inputEmail}
          type="text"
          id="email"
        />
        {!errorMessageEmail ? (
          <p className="error-text">'Type an valid email'</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
