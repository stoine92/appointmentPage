import React from "react";


export const ContactPicker = ({contacts, onChange, contact } ) => {
  let options = contacts.map((contact, index) => (
    <option key={index} value={contact.name}>
      {contact.name}
    </option>
  ));
  return (
       <select value={contact} onChange={onChange} required>
        <option value="">Select contact</option>
        {options}
      </select>
    
  );
};
