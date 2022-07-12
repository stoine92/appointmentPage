import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type="text"></input>
    <input type="tel"></input>
    <input type="email"></input>


    </form>
    {ContactForm}
    </>
    
  );
};
