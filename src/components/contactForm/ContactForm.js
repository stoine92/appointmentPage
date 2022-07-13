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
   
    <form onSubmit={handleSubmit}>
    <input type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Name"
    required
    ></input>

    <input 
    type="tel"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    pattern="((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}"
    placeholder="Telephone number"
    required
    ></input>

    <input 
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder='Email address'
    required
    ></input>

    <input type="submit" value="Submit"></input>
    </form>
    
  );
};
