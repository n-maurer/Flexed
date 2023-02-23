import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import EDModal from "./AddWorkoutDateModal";
import CertainDaysWorkout from "./CertainDatesWorkouts";
import { useGetTokenQuery } from "../Accounts/AuthApi";

function MyCalendar() {
    const {
        data: tokenData,
        error: tokenError,
        isLoading: tokenIsLoading,
    } = useGetTokenQuery();
    const [date, setDate] = useState(new Date());
    const months = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12",
    };

    let selectedDate = date.toDateString();
    let splitDate = selectedDate.split(" ");
    let shortDate = `${splitDate[1]} ${splitDate[2]}`;
    let longDate = `${splitDate[3]}-${months[splitDate[1]]}-${splitDate[2]}`;

    return (
        <>
            {tokenData ? (
                <div>
                    <div className="calendar-container center-calendar">
                        <Calendar onChange={setDate} value={date} />
                    </div>
                    <EDModal date={longDate} shortDate={shortDate} />
                    {tokenIsLoading ? (
                        <></>
                    ) : (
                        <CertainDaysWorkout
                            shortDate={shortDate}
                            longDate={longDate}
                            userId={tokenData.account["id"]}
                        />
                    )}
                </div>
            ) : (
                <>You need to login to view this page</>
            )}
        </>
    );
}
export default MyCalendar;
