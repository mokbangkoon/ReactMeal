import { useState, useEffect } from 'react';
import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [enteredNameIsValid]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    if (enteredName.trim() === '') {
      return;
    }
  };
  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">이름이 유효하지 않습니다.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
