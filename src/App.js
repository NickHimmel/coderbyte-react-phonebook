import React from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm'
import PhoneList from './components/PhoneList'

function App() {
  return (
    <div>
      <h2>Phone Book</h2>
      <PhoneForm />
      <PhoneList />
    </div>
  );
}

export default App;
