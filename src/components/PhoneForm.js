import React from 'react';

export default function PhoneForm() {
    return (
        <form className="phone-form flex column">
            <label>First Name</label>
            <input type="text" name="firstName"></input>
            <label>Last Name</label>
            <input type="text" name="lastName"></input>
            <label>Phone</label>
            <input type="text" name="phone"></input>
            <button className="self-end">Submit</button>
        </form>
    );
}