import React, { useState } from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import {
  Box, List, ListItem, ListItemText, Typography, useTheme,
} from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        allDay: selected.allDay,
      };

      setCurrentEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  };

  const handleEventClick = (selected) => {
    if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'?`)) {
      setCurrentEvents((prevEvents) => prevEvents.filter((event) => event.id !== selected.event.id));
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Interactive Calendar Page" />

      <Box display="flex" justifyContent="space-between">
        <Box
        mt='56px'
  
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{ backgroundColor: colors.greenAccent[500], margin: '10px 0', borderRadius: '2px' }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={formatDate(event.start, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box flex="1 1 100%">
          <FullCalendar
            height="75vh"
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridDay,listMonth',
            }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            events={currentEvents}
            select={handleDateClick}
            eventClick={handleEventClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
