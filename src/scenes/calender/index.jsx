import React from "react";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {Box, List, ListItem, ListItemText, Typography, useTheme} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import useMediaQuery from "@mui/material/useMediaQuery";

const Calender = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const calendarHeight = isSmallScreen ? '50vh' : '75vh';

    const formatDate = (date) => {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }).format(date);
    };

    const handleDateClick = (selected) => {
        const title =prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if(title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,


            });
        }
    };
    const handleEventClick = (selected) => {
        if(window.confirm(
            `Are you sure you want to delete the event '${selected.event.title}'`
          ))
        {
            selected.event.remove();
        }
    };
    return (
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
            <Box display="flex" justifyContent="space-between" flexDirection={isSmallScreen ? 'column' : 'row'}>
                {/*CALENDAR SIDEBAR */}
                <Box 
                flex={isSmallScreen ? 'none' : '1 1 20%'}
                backgroundColor = {colors.primary[400]}
                p="15px"
                borderRadius="4px"
                width="100%"
                >
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                            key = {event.id}
                            sx = {{backgroundColor: colors.greenAccent[500], margin: "10px 0", borderRadius: "2px"}}
                            >
                                <ListItemText
                                primary={event.title}
                                secondary = {
                                    <Typography>
                                        {formatDate(event.start)} 
                                    </Typography>
                                }
                                />

                            </ListItem>
                        ))}
                    </List>

                </Box>
                {/*CALENDAR*/}
                <Box flex="1 1 100%" ml={isSmallScreen ? '5px' : '15px'}>
                    <FullCalendar
                    height={calendarHeight}
                    width={isSmallScreen ? '80%' : '100%'} // Adjusted width based on isSmallScreen
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin
                    ]}
                    headerToolbar={{
                        left: isSmallScreen ? '' : "prev,next today", // Hide navigation buttons on small screens
                        center: "title",
                        right: isSmallScreen ? '' : "dayGridMonth,timeGridWeek,timeGridDay,listMonth", // Hide view buttons on small screens
                      }}
                    initialView="dayGridMonth"
                    editable ={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events) => setCurrentEvents(events)}
                    initialEvents={[
                        {
                            id: "12315",
                            title: "All-day event",
                            date: "2022-09-14"
                        },
                        {
                            id:"5123",
                            title: "Timed event",
                            date: "2022-09-28",
                        },
                    ]}
                    
                    />
                </Box>

            </Box>
        </Box>
    );

};

export default Calender;