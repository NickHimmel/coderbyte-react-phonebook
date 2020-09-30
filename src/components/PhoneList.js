import React from 'react';

export default function PhoneList({ phoneNumbers }) {
    const sortedNumbers = phoneNumbers.sort((a, b) => {
        const nameA = a.lastName.toUpperCase();
        const nameB = b.lastName.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if(nameA > nameB) {
            return 1;
        }

        return 0;
    })

    return (
        <table className="phone-list">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>      
                {sortedNumbers.map((number) => (
                    <tr key={number.phone}>
                        <td>{number.firstName}</td>
                        <td>{number.lastName}</td>
                        <td>{number.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}