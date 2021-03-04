import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";

import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  'fr': require("date-fns/locale/fr")
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

/**
  const formats = {
    timeGutterFormat: (date, culture, localizer) => localizer.format(date, 'HH:mm', culture),
    eventTimeRangeFormat: ({ start, end }, culture, localizer) => {
      const s = localizer.format(start, 'HH:mm', culture);
      const e = localizer.format(end, 'HH:mm', culture);
  
      return `${s} - ${e}`;
    },
    agendaTimeFormat: ({ start, end }, culture, localizer) => {
      const s = localizer.format(start, 'HH:mm', culture);
      const e = localizer.format(end, 'HH:mm', culture);
  
      return `${s} - ${e}`;
    },
    dayRangeHeaderFormat: ({ start, end }, culture, localizer) => {
      const s = localizer.format(start, 'MMM dd', culture);
      const e = localizer.format(end, 'MMM dd', culture);
  
      return `${s} - ${e}`;
    },
  }
*/

const messages = {
  today: 'Aujourd\'hui',
  previous: 'Précédent',
  next: 'Suivant',
  month: 'Mois',
  week: 'Semaine',
  day: 'Jour',
  agenda: 'Planning',
};

const SalesmanCalender = ({ events, onDbClickOnEvent }) => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      defaultView="week"
      startAccessor="start"
      endAccessor="end"
      culture="fr"
      messages={messages}
      onDoubleClickEvent={onDbClickOnEvent}
      style={{ minHeight: '90vh' }}
    />
  </div>
);

export default SalesmanCalender;