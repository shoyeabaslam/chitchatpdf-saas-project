"use client"

import React from 'react';
import axios from 'axios';

const Page = () => {
  
  const sendData = async () => {
    try {
      const data = { userName: "shoyea", userEmail: "shoyeab2@gmail.com" };
      const response = await axios.post('/api/adduserdata',data);

      if (response.status === 200) {
        console.log("Request succeeded");
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (err) {
      console.error("An error occurred:", err);
    }
  }

  return <div><button onClick={sendData}>Click</button></div>;
};

export default Page;
