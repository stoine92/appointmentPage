import React from "react";
import PropTypes from 'prop-types';


export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  
}) => {

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
   
    <form onSubmit={handleSubmit}>

    <input type="text"
    value={name}
    onChange={handleName}
    placeholder="Name"
    
    />

    <input 
    type="tel"
    value={phone}
    onChange={handlePhone}
    pattern="((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}"
    placeholder="Telephone number"
    
    />

    <input 
    type="email"
    value={email}
    onChange={handleEmail}
    placeholder='Email address'
    
    />

    <input type="submit" value="Submit"></input>
    </form>
    
  );
};


ContactForm.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  phone: PropTypes.string,
  setPhone: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  handleSubmit: PropTypes.func,
};


