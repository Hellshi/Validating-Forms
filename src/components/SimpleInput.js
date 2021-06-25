import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [placeholder, setPlaceHolder] = useState("");
  const [EnteredNameIsValid, SetEnteredNameIsValid] = useState(true);
  const [focus, setFocus] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsValid = !enteredNameIsValid && focus;

  const handleOnFocus = () => {
    setFocus(true);
    if (nameInputIsValid) {
      setPlaceHolder("Type something");
      SetEnteredNameIsValid(false);
      return;
    }
  };

  const handleInput = (e) => {
    setEnteredName(e.target.value);
    SetEnteredNameIsValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredValue = nameInputRef.current.value;
    if (!enteredNameIsValid) {
      setPlaceHolder("Type something");
      SetEnteredNameIsValid(false);
      return;
    }
    console.log(enteredValue);
    setPlaceHolder("");
    setEnteredName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={
          EnteredNameIsValid
            ? "form-control"
            : `form-control-${EnteredNameIsValid}`
        }
      >
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={handleOnFocus}
          ref={nameInputRef}
          placeholder={placeholder}
          onChange={handleInput}
          value={enteredName}
          type="text"
          id="name"
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
