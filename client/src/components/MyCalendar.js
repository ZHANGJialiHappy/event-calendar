import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import { Dialog } from './Dialog';

export const MyCalendar = props => {
  const myEvents = [
    {
      "id": 0,
      "title": "All Day Event very long title",
      "start": "2022-10-18T22:00:00.000Z",
      "end": "2022-10-19T22:00:00.000Z"
    }
  ];
  const [calendarEvent, setCalendarEvent] = useState(myEvents);
  const localizer = momentLocalizer(moment)
  const [isVisible, setIsVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);


  const handleSelectSlot = (data) => {
    setIsVisible(true);
    const event = {
      id: Math.floor(Math.random() * 10000),
      title: "12",
      start: data.start,
      end: data.end
    }
    setCurrentEvent(event);
  }

  const handleSelectEvent = (data) => {
    console.log("event", data);
    setIsVisible(true);
  }

  const handleSubmit = (event) => {
    console.log(event);
    const others = calendarEvent.filter((item)=>item.id!==event.id);
    const newEvents = [...others,event];
    setCalendarEvent(newEvents);
  }

  return (
    <div>
      <Calendar
        selectable={true}
        onSelectSlot={handleSelectSlot}
      
        onSelectEvent={handleSelectEvent}
        localizer={localizer}
        events={calendarEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      <Dialog visiable={isVisible} event={currentEvent} onSubmit={handleSubmit} />
     
    </div>
  )
}