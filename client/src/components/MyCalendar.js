import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

export const MyCalendar = props => {
  const localizer = momentLocalizer(moment)
  const myEvents = [
    {
      "id": 0,
      "title": "All Day Event very long title",
      "allDay": true,
      "start": "2022-10-18T22:00:00.000Z",
      "end": "2022-10-19T22:00:00.000Z"
    }
  ];

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
}