import React from "react";

const SingleContact = (Contact) => {
  return (
    <div>
      <p>Hi</p>
      <p>{Contact.name}</p>
      <p>{Contact.phone}</p>
    </div>
  );
};

export default SingleContact;
