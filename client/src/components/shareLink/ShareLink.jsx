import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShareLink() {
    const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/hello')
      .then(response => {
        console.log(response);
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching message:', error);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default ShareLink
