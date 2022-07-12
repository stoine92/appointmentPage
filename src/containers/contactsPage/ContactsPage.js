import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContacts}) => {
 

 const [name, setName] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [isAdded, setIsAdded] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!isAdded) {
      addContacts(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }else{
      alert('Name has been taken')
    }
  };

  useEffect(() => {
    contacts.find((contact) => contact.name === name)
      ? setIsAdded(true)
      : setIsAdded(false);
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      </section>
      
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
