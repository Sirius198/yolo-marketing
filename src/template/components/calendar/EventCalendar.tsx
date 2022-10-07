import React from 'react';
import '@fullcalendar/react/dist/vdom';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
// import listPlugin from '@fullcalendar/list';
// import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
// import momentTimezonePlugin from '@fullcalendar/moment-timezone';

const calendarData = [
  {
    title: 'Meeting with a client',

    borderColor: 'transparent',
    start: '2022-09-27',
    end: '2022-09-29',
    backgroundColor: '#19F3DE',
    className: 'info',
  },

  {
    title: 'Webinar - Marketing for Developers',

    borderColor: 'transparent',
    start: '2022-10-06',
    end: '2022-10-08',
    backgroundColor: '#01B574',
    className: 'success',
  },

  {
    title: 'Design UI and check sales on PayPal',

    borderColor: 'transparent',
    start: '2022-10-10',
    end: '2022-10-12',
    backgroundColor: '#FFB547',
    className: 'warning',
  },

  {
    title: 'Configure table for Daily tasks on Notion',

    borderColor: 'transparent',
    start: '2022-10-21',
    end: '2022-10-23',
    backgroundColor: '#19F3DE',
    className: 'error',
  },
];

export interface EventCalendarProps {
  calendarData?: {
    title: string;
    borderColor: string;
    start: string;
    end: string;
    backgroundColor: string;
    className: string;
  }[];
  initialDate?: string;
}

const defaultProps: EventCalendarProps = {
  calendarData,
  initialDate: '2022-10-01',
};

function EventCalendar(props: EventCalendarProps) {
  const { calendarData, initialDate } = props;

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      headerToolbar={false}
      initialView="dayGridMonth"
      contentHeight="600px"
      events={calendarData}
      initialDate={initialDate}
      editable={true}
      // minHeight='400px'
      height="100%"
      // width
      // slotWidth={10}
      // customIcons={false}
    />
  );
}

EventCalendar.defaultProps = defaultProps;

export default EventCalendar;
