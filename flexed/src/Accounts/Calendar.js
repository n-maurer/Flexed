import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

function MyCalendar() {
    const [date, setDate] = useState(new Date());
    let selectedDate = date.toDateString();
    let splitDate = selectedDate.split(" ");
    let shortDate = `${splitDate[1]} ${splitDate[2]}`;
    let longDate = `${splitDate[1]} ${splitDate[2]} ${splitDate[3]}`;

    return (
        <div>
            <div className="calendar-container center-calendar">
                <Calendar onChange={setDate} value={date} />
            </div>
            <button type="button" className="btn btn-secondary">
                Add Workout to {shortDate}
            </button>
            <div>Your Workouts on {shortDate}:</div>
        </div>
    );
}
export default MyCalendar;
