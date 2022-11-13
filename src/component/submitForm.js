import { useRef, useState } from "react";

const SubmitForm = (props) => {
  const [gg, setGender] = useState();
  const gender = ["male", "female"];
  const firstNameInputRef = useRef();

  const onOptionChange = (e) => {
    setGender(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const submitForm = { name: firstNameInputRef.current.value, gender: gg }
    props.submitForm(submitForm)
    firstNameInputRef.current.value = ''
    setGender('')
  };

  const GenderRadio = (props) => {
    return (
      <div>
        <input
          type="radio"
          id={props.gender}
          name="gender_list"
          value={props.gender}
          onChange={onOptionChange}
          checked={props.gender === gg}
        ></input>
        <label htmlFor={props.gender}>{props.gender}</label>
      </div>
    );
  };

  return (
    <form onSubmit={submitHandler} refs="formtest">
      <label htmlFor="firstname">FirstName</label>
      <input id="firstname" type="text" ref={firstNameInputRef}></input>
      <div>Gender</div>
      {gender.map((gen) => (
        <GenderRadio gender={gen} key={gen}></GenderRadio>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitForm;
