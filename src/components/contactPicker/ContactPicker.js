import React from "react";


export const ContactPicker = ({ contacts, selectContact }) => {
  return (
    <select name='contacts' id='contacts-select' onChange={selectContact}>
      <option value='' key={-1} selected>
        
      </option>
      {contacts?.map((contact) => (
        <option value={contact.name} key={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
