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
    <>
     <AppointmentForm />
     <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        placeholder="Title"
        value={title}
        ></input>
        <input 
        type="date" 
        value={date}
        placeholder="Date"
        
        ></input>
        <input 
        type="time"
        value={time}
        placeholder="Time"
        ></input>
        <ContactPicker />
        <button>Submit</button>

     </form>
     
    </>
   
  );
};
