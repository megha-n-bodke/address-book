import React, { useEffect } from "react";
import SingleContact from "./SingleContact";
import { v4 as uuidv4 } from "uuid";
const Contact = () => {
  const storedFormDataArray = JSON.parse(localStorage.getItem("formDataArray"));
  storedFormDataArray.sort((a, b) => a.name.localeCompare(b.name));
  localStorage.setItem("formDataArray", JSON.stringify(storedFormDataArray));

  function handleClick(index) {
    console.log(index);
    const key = index;
    localStorage.removeItem(key);
  }

  return (
    <div>
      {storedFormDataArray.map((item, index) => (
        <>
          <p key={index}>{item.name}</p>
          <p>{item.phone}</p>
          <div>
            <button type="button" className="btn btn-info">
              Update
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleClick(index)}
            >
              Delete
            </button>
          </div>
          <p>{index}</p>

          {/*  <SingleContact key={uuidv4()} singlecontact={item} /> */}
        </>
      ))}
    </div>
  );
};

export default Contact;
