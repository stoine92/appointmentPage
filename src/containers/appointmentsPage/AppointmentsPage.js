import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = ({contacts, appointments, addAppointments}) => {


  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const test = (e) =>{
    console.log(contacts);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
