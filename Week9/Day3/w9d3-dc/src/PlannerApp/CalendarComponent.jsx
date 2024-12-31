import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TaskInput from "./TaskInput";
import TasksList from "./TasksList";


const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const formattedDate = new Date(selectedDate).toISOString().split("T")[0];

    return (
        <div>
           
            <Calendar
                onChange={(date) => setSelectedDate(date)}
                value={selectedDate}
            /> 
            <TaskInput date = {formattedDate} />
            <TasksList date = {formattedDate} />
        </div>
    );
};

export default CalendarComponent;
