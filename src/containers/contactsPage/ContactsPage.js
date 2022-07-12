import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = ({contacts, addContacts}) => {
  /*
  Define state variables for 
  contact info and duplicate check
 */  

 const [name, setName] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [isAdded, setIsAdded] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!isAdded) {
      addContacts(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
   
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name}
        phone={phone}
        email={email}
      />
      </section>
      
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
