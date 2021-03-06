import React, { useState, useEffect } from 'react';
import { format, addMinutes } from 'date-fns';
import { fr } from 'date-fns/locale';

import { randomString } from '../../shared/utils/strings.util';

const EventForm = ({ event, onSubmit }) => {
  const toDatelocalString = (date) => format(date, "yyyy-MM-dd'T'HH:mm", { locale: fr });
  const defaultEndDate = (date) => toDatelocalString(addMinutes(date, 30));

  const [title, setTitle] = useState('');
  const [allDay, setAllDay] = useState(false);
  const [start, setStart] = useState(toDatelocalString(new Date()));
  const [end, setEnd] = useState(defaultEndDate(new Date()));

  const handleStartDateChange = (e) => {
    setStart(e.target.value);
    if (!event) {
      setEnd(defaultEndDate(new Date(e.target.value)));
    }
  }

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setAllDay(event.allDay);
      setStart(toDatelocalString(event.start));
      setEnd(toDatelocalString(event.end));
    }
  }, [event]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: event?.id || randomString(),
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
          value={title || ''}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <input
          type="datetime-local"
          name="start"
          value={start || toDatelocalString(new Date())}
          onChange={handleStartDateChange}
        />
      </div>

      <div>
        <input
          type="datetime-local"
          name="end"
          value={end || defaultEndDate(new Date())}
          onChange={(e) => setEnd(e.target.value)}
        />
      </div>

      <div>
        <input
          type="checkbox"
          id="allDay"
          name="allDay"
          checked={allDay || false}
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
