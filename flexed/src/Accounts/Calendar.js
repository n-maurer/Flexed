import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

function MyCalendar() {
    const [date, setDate] = useState(new Date());
    let selectedDate = date.toDateString();

    return (
        <div>
            <div className="calendar-container center-calendar">
                <Calendar onChange={setDate} value={date} />
            </div>
            <button type="button" className="btn btn-secondary">
                Add Workout to {selectedDate}
            </button>
        </div>
    );
}
export default MyCalendar;
