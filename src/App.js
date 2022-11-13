import { useState } from "react";
import "./App.css";
import SubmitForm from "./component/submitForm";
import CounterReducer from "./component/CounterReducer"

const App = () => {
  const [forms, setForm] = useState([]);
  const submitHanderler = (form) => {
    const newForm = [...forms]
    newForm.push(form)
    setForm(newForm)
    console.log(forms)
  };
  return (
    <div>
      <h1>Hello</h1>
      <SubmitForm submitForm={submitHanderler}></SubmitForm>
      <CounterReducer></CounterReducer>
    </div>
  );
};

export default App;
