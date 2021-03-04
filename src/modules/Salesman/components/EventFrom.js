import React, { useState, useEffect } from 'react';
import { randomString } from '../../shared/utils/strings.util';

const EventForm = ({ event, onSubmit }) => {
  const toDatelocalString = (date) => date.toISOString().substring(0, 16);

  const [title, setTitle] = useState('');
  const [allDay, setAllDay] = useState(false);
  const [start, setStart] = useState(toDatelocalString(new Date()));
  const [end, setEnd] = useState(toDatelocalString(new Date()));

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setAllDay(event.allDay);
      setStart(toDatelocalString(event.start));
      setEnd(toDatelocalString(event.end));
    }
  }, [event]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEvent = {
      id: randomString(),
      title,
      allDay,
      start: new Date(start),
      end: new Date(end),
    };

    onSubmit(newEvent);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Titre de l'évènement"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <input
          type="datetime-local"
          name="start"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>

      <div>
        <input
          type="datetime-local"
          name="end"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
      </div>

      <div>
        <input
          type="checkbox"
          id="allDay"
          name="allDay"
          checked={allDay}
          onChange={(e) => setAllDay(e.target.checked)}
        />

        <label htmlFor="allDay">Toute la journée ?</label>
      </div>


      <button
        type="submit"
        value={event ? 'Modifier' : 'Ajouter'}
      >{event ? 'Modifier' : 'Ajouter'}</button>
    </form>
  )
}

export default EventForm;
