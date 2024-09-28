import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

const App = () => {
    const [data, setData] = useState([]);

    // Fetch the data when the component mounts
    useEffect(() => {
        axios.get('http://localhost:3001/testdata')
            .then((response) => {
                setData(response.data.data); // Update state with the data from test_table
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    // Function to handle "Create an Account" button click
    const handleCreateAccount = () => {
        console.log("Create Account button clicked");
        // Here, you can redirect the user to the account creation page or open a modal, etc.
    };

    return (
        <div>
            <h1>Data from test_table</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        {Object.values(item).join(' - ')}
                    </li>
                ))}
            </ul>
            {/* Create an Account Button */}
            <button onClick={handleCreateAccount}>Create an Account</button>
        </div>
    );
};

export default App;
