import React, { Component } from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import axios from "axios";
import EventDate from "../UI/EventDate/EventDate";
import EventTimes from "../UI/EventTimes/EventTime";
import Button from "@material-ui/core/Button";

//import Button from "../UI/CustomButton/Button";
//import axios from "../../utils/axios";

class Rally extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            Rallies: []
        };
    }
    componentDidMount() {
        this.getVenueInfo();
        //this.renderMap();
    }
    getVenueInfo() {
        // this gets the event id from the URL params
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let theID = params.get("id");
        // save the id to the redux store
        // this.props.setEventID(params.get("id"));
        // this gets all the rally information, then passes it to redux
        //---------------------------------------------------------------
        // we have the apiURL in redux, grab that and make url for axios
        //let theAPI = this.props.getAPIURL;
        //console.log("apiURL:" + theAPI);

        axios({
            method: "get",
            url:
                "https://evgvlc22t1.execute-api.us-east-1.amazonaws.com/UAT/event/retrieve",
            params: {
                eventId: theID
            }
        }).then(res => {
            console.log(res);
            this.setState({ Rallies: res.data });
        });
    }
    render() {
        return (
            <ul>
                {this.state.Rallies.map(rally => (
                    <div>
                        <h1>P8 Rally Information</h1>
                        <h2>Venue Information</h2>
                        <div className='Venue'>
                            <EventDate eventDate={rally.eDate} />

                            <div className='VenueName'>{rally.vName}</div>
                            <div className='VenueAddress'>
                                {rally.vStreet}
                                <br />
                                {rally.vCity}, {rally.vState} {rally.vZipcode}
                            </div>
                            <EventTimes
                                startTime={rally.eStartTime}
                                endTime={rally.eEndTime}
                            />
                            <div>
                                <img
                                    src={rally.eGraphics}
                                    width='400'
                                    margin-bottom='10'
                                />
                                <br />
                            </div>
                            <div>&nbsp;</div>
                            <Link
                                // className='btn btn-primary'
                                to={"/register?id=" + rally.eid}
                            >
                                <Button variant='contained' color='secondary'>
                                    REGISTER NOW
                                </Button>
                            </Link>
                            <div>&nbsp;</div>
                            <div className='EventComments'>
                                {rally.eventNotes}
                            </div>
                            <div className='FurtherInfo'>
                                If you need further information, please contact
                                your CR state rep, or you can contact the
                                supporting state rep.
                                <br />
                            </div>
                            <div className='BoxMessage'>
                                <div className='StateRepInfo'>
                                    <font className='stateRepName'>
                                        {rally.stateRepName}
                                    </font>
                                    <br />
                                    <font className='stateRepEmail'>
                                        {rally.stateRepEmail}
                                    </font>
                                    <br />
                                    <font className='stateRepPhone'>
                                        {rally.stateRepPhone}
                                    </font>
                                </div>
                            </div>
                            <div className='VenueMap'>
                                <div id='map'></div>

                                {rally.vMapLink}
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        );
    }
}
export default Rally;
