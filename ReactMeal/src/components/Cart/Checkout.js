import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredNameIsValud = !isEmpty(enteredName);
    const enteredStreetIsValud = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValud = isFiveChars(enteredPostalCode);
    const enteredCityIsValud = !isEmpty(enteredCity);
    setFormInputValidity({
      name: enteredNameIsValud,
      street: enteredStreetIsValud,
      city: enteredCityIsValud,
      postalCode: enteredPostalCodeIsValud,
    });

    const formIsValid =
      enteredNameIsValud &&
      enteredStreetIsValud &&
      enteredPostalCodeIsValud &&
      enteredCityIsValud;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? '' : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputValidity.postalCode ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? '' : classes.invalid
  }`;

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={nameControlClasses}>
        <label htmlFor="name">이름</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>이름을 제대로 입력해주세요!</p>}
      </div>

      <div className={streetControlClasses}>
        <label htmlFor="street">도로명</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>도로명을 제대로 입력해주세요!</p>}
      </div>

      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">주소</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />

        {!formInputValidity.postalCode && <p>주소를 제대로 입력해주세요!</p>}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor="city">지역</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>지역을 제대로 입력해주세요!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          취소
        </button>
        <button type="submit" className={classes.submit}>
          확인
        </button>
      </div>
    </form>
  );
};

export default Checkout;
