import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Form from "./pages/Form";
import NoPage from "./pages/NoPage";
import AppProvider from "./store/AppProvider";
const App = () => {
  const [forms, setForm] = useState([]);
  const submitHanderler = (form) => {
    const newForm = [...forms];
    newForm.push(form);
    setForm(newForm);
    console.log(forms);
  };

  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/counter"
              element={<Counter submitForm={submitHanderler} />}
            ></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
