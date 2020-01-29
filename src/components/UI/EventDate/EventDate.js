import React from "react";
import "./EventDate.css";

function extractDay(theString) {
    // takes the database string for event date and returns the date (day) of the event
    // YYYY-MM-DDT00:000:00:000Z
    var theDate = theString.substr(0, 10);
    var dbDate = new Date(theDate.replace("-", "/"));
    return dbDate.getDate();
}
function displayDate(s) {
    var theDate = s.substr(0, 10);
    var dbDate = new Date(theDate.replace("-", "/"));
    var theMonth = dbDate.getUTCMonth() + 1;
    var theDay = dbDate.getUTCDate();
    var theYear = dbDate.getUTCFullYear();
    var returnValue = theMonth + "/" + theDay + "/" + theYear;
    return returnValue;
}
function displayWeekday(theString) {
    // takes the database string for event date and returns the date (day) of the event
    // YYYY-MM-DDT00:000:00:000Z
    var dbDate = new Date(theString);
    var dayOfWeek = dbDate.getDay();
    dayOfWeek = dayOfWeek + 1;
    return isNaN(dayOfWeek)
        ? null
        : [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
          ][dayOfWeek];
}
function EventDate(props) {
    return (
        <div>
            <div>
                <font className='EventDay'>{extractDay(props.eventDate)}</font>
                <font className='EventDOW'>
                    {displayWeekday(props.eventDate)}{" "}
                </font>
                <font className='EventDate'>
                    {displayDate(props.eventDate)}
                </font>
            </div>
        </div>
    );
}
export default EventDate;
