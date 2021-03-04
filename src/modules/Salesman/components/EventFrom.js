import React, { useState } from 'react';

const EventForm = ({ event, onSubmit }) => {
  const initialFormValues = {
    title: event.title || '',
    allDay: event.allDay || false,
    start: event.start || new Date(),
    end: event.end || new Date(),
  };

  const [formData, setFormData] = useState(initialFormValues);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  };

  const handleSubmit = (event) => {
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Titre de l'évènement"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        type="datetime-local"
        name="start"
        value={formData.start}
        onChange={handleChange}
      />

      <input
        type="datetime-local"
        name="end"
        value={formData.end}
        onChange={handleChange}
      />

      <input
        type="checkbox"
        name="allDay"
        value={formData.allDay}
        onChange={handleChange}
      />

      <button
        type="submit"
        value={event ? 'Modifier' : 'Ajouter'}
      ></button>
    </form>
  )
}