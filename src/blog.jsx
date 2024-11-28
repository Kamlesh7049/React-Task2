import React, { useState } from 'react';


const Blog=()=> {
  const [number, setNumber] = useState('');
  const [square, setSquare] = useState(null);
  const [cube, setCube] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    if (value == '') {
      // setSquare(null);
      // setCube(null);
    } else {
      const num = (value);
      setSquare(num * num);
      setCube(num * num * num);
    }
  };

  return (
    <div >
      <h2>Square and Cube </h2>
      <input type="number" onChange={handleChange} />
      
        <div>
          <p>Square : {square}</p>
          <p>Cube : {cube}</p>
        </div>
  
    </div>
  );
}

export default Blog;