import React from "react";

function EventTimes(props) {
    const convertTimes = (s, e) => {
        var sd = s.replace(":", ".");
        var startTime = parseFloat(sd);
        var displayStart = startTime < 13 ? startTime : startTime - 12;
        var ed = e.replace(":", ".");
        var endTime = parseFloat(ed);
        var displayEnd = endTime < 13 ? endTime : endTime - 12;
        var returnString = "";
        if (startTime < 12.0) {
            returnString = returnString + displayStart.toFixed(2) + " AM to ";
        } else {
            returnString = returnString + displayStart.toFixed(2) + " PM to ";
        }
        if (endTime < 12) {
            returnString = returnString + displayEnd.toFixed(2) + " AM";
        } else {
            returnString = returnString + displayEnd.toFixed(2) + " PM";
        }

        return returnString;
    };
    return (
        <div>
            <div className='EventTimes'>
                {convertTimes(props.startTime, props.endTime)}
            </div>
        </div>
    );
}
export default EventTimes;
