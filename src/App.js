import React, { useState } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm'
import PhoneList from './components/PhoneList'

function App() {
  const [phoneNumbers, setPhoneNumbers] = useState([{
    firstName: "Jane",
    lastName: "Doe",
    phone: "123-456-7891"
  }])

  const handleSubmit = (newNumber) => {
    setPhoneNumbers([...phoneNumbers, newNumber])
  }
  
  return (
    <div>
      <h2>Phone Book</h2>
      <PhoneForm onSubmit={handleSubmit}/>
      <PhoneList phoneNumbers={phoneNumbers} />
    </div>
  );
}

export default App;
