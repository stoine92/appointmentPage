import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContacts}) => {
 

 const [currName, setCurrName] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [isAdded, setIsAdded] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!isAdded) {
      addContacts(currName, phone, email);
      setCurrName("");
      setPhone("");
      setEmail("");
    }else{
      alert('Name has been taken')
    }
  };

  useEffect(() => {
    if(contacts){
      contacts.find((contact) => contact.currName === currName)
      ? setIsAdded(true)
      : setIsAdded(false);
    }
    
  }, [contacts, currName]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={currName}
        setName={setCurrName}
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
