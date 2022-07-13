import React from "react";
import { ContactPicker} from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
  
     <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        placeholder="Appointment title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ></input>

        <input 
        type="date" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Appointment date"
        
        ></input>

        <input 
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Appointment time"
        ></input>
        
        <input type="submit" value="Submit"></input>

        <ContactPicker contacts={contacts} selectContact={(e) => setContact(e.target.value)} value={contact}/>
     </form>
   
  );
};
