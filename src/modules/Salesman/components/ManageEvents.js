import React, { useState } from 'react';

import initialEvents from '../../Salesman/events';
import SalesmanCalendar from '../../shared/components/SalesmanCalendar';
import ModalOverlay from '../../shared/components/OverlayModal';
import EventForm from './EventFrom';

const ManageEvents = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [events, setEvents] = useState(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const handleSubmit = (newEvent) => {
    if (selectedEvent) {
      console.log(newEvent);
      setEvents([
        ...events.filter(e => e.id !== newEvent.id),
        newEvent
      ]);
    } else {
      setEvents([
        ...events,
        newEvent,
      ]);
    }


    closeModal();
  }

  const handleDbClickOnEvent = (event) => {
    setSelectedEvent(event);
    openModal();
  }

  return (
    <div>
      {isModalOpen && (
        <ModalOverlay
          title={selectedEvent ? 'Modifier un événement' : 'Ajouter un événement'}
          onClose={closeModal}
        >
          <EventForm
            event={selectedEvent}
            onSubmit={handleSubmit}
          />
        </ModalOverlay>
      )}
      <button
        onClick={openModal}
        style={{
          marginBottom: '30px',
          padding: '10px 20px',
        }}
      >
        Ajouter
      </button>
      <SalesmanCalendar
        events={events}
        onDbClickOnEvent={handleDbClickOnEvent}
      />
    </div>
  );
};

export default ManageEvents;