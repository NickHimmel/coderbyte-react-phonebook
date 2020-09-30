import React, { useState } from 'react';

export default function PhoneForm({ onSubmit }) {
    const [newNumber, setNewNumber] = useState({
        firstName: "",
        lastName: "",
        phone: ""
    })

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setNewNumber({
            ...newNumber,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(newNumber)
        setNewNumber({
            firstName: "",
            lastName: "",
            phone: ""
        })
    }

    return (
        <form 
            className="phone-form flex column"
            onSubmit={(e) => handleSubmit(e)}>
            <label>First Name</label>
            <input 
                type="text" 
                name="firstName"
                onChange={(e) => handleChange(e)}
                value={newNumber.firstName}>
            </input>
            <label>Last Name</label>
            <input 
                type="text" 
                name="lastName"
                onChange={(e) => handleChange(e)}
                value={newNumber.lastName}>
            </input>
            <label>Phone</label>
            <input 
                type="text" 
                name="phone"
                onChange={(e) => handleChange(e)}
                value={newNumber.phone}>
            </input>
            <button className="self-end">Submit</button>
        </form>
    );
}