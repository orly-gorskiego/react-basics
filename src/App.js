import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

const initialValues = {
  firstName: "",
  lastName: "",
}

function App() {
  const [form, setForm] = useState(initialValues)

  const handleFieldChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <div className="App">
      <Header text={form.firstName} second_text="halo" third_text="witaj" />
      <input value={form.firstName} name="firstName"  placeholder='First Name' onChange={handleFieldChange} />
      <input value={form.lastName} name="lastName" placeholder='Last Name' onChange={handleFieldChange} />
    </div>
  );
}

export default App;
