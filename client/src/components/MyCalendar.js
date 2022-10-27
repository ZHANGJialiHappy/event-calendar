import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import { Dialog } from './Dialog';

export const MyCalendar = props => {
  
  const [calendarEvent, setCalendarEvent] = useState([]);
  const localizer = momentLocalizer(moment)
  const [isVisible, setIsVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);


  const handleSelectSlot = (data) => {
    setIsVisible(true);
    const event = {
      id: Math.floor(Math.random() * 10000),
      title: "",
      start: data.start,
      end: data.end
    }
    setCurrentEvent(event);
  }

  const handleSelectEvent = (event) => {
    setCurrentEvent(event);
    setIsVisible(true);
  }

  const onSubmit = (event) => {
    const others = calendarEvent.filter((item)=>item.id!==event.id);
    const newEvents = [...others,event];
    setCalendarEvent(newEvents);
    closeDialog();
  }

  const closeDialog = (e) => {
    e?.preventDefault();
    setIsVisible(false);
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
      <Dialog visiable={isVisible} event={currentEvent} onSubmit={onSubmit} closeDialog={closeDialog}/>
     
    </div>
  )
}