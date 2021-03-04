import React, { useState } from 'react';

import initialEvents from './events';
import SalesmanCalendar from './SalesmanCalendar';

import './App.css';

const App = () => {
  const [events, setEvents] = useState(initialEvents);

  return (
    <div className="App">
      <h1>This is a test</h1>
      <SalesmanCalendar events={events} />
    </div>
  );
}

export default App;
