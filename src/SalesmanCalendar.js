import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";

import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  fr: require("date-fns/locale/fr")
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const views = Object.keys(Views).map((k) => Views[k]);

const SalesmanCalender = ({ events }) => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      step={60}
      views={views}
      style={{ height: 500 }}
      defaultDate={new Date()}
    />
  </div>
);

export default SalesmanCalender;