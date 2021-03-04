import React, { useState } from 'react';

import initialEvents from '../../Salesman/events';
import SalesmanCalendar from '../../shared/components/SalesmanCalendar';

const ManageEvents = () => {
  const [events, setEvents] = useState(initialEvents);

  return <SalesmanCalendar events={events} />;
};

export default ManageEvents;