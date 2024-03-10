import React, { useState, useEffect } from 'react';

function Random({a}) {
  // // State to store the array of objects
  // const [objectsArray, setObjectsArray] = useState([]);

  // useEffect(() => {
  //   // Update the state when objectsFromProps changes
  //   setObjectsArray(objectsFromProps);
  // }, [objectsFromProps]);

  // // ... rest of your component logic

  return (
    <div>
      <h1>Your Component</h1>

      {/* {objectsArray.map((object, index) => (
        <div key={index}>
          <p>Title: {object.title}</p>
          <p>Content: {object.content}</p>

        </div>
      ))}  */}
    </div>
  );
}

export default Random;
