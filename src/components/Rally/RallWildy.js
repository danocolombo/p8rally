import React, { Component } from "react";
//import { connect } from "react-redux";

import axios from "axios";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import EventTimes from "../UI/EventTimes/EventTime";
import EventDate from "../UI/EventDate/EventDate";

import Button from "./Rally.js";
import classes from "./Rally.css";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
class Register extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            rallyevent: [],
            rallyId: 0
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
        //this.props.setEventID(params.get("id"));
        this.setState({ rallyId: params.get("id") });

        // this gets all the rally information, then passes it to redux
        //---------------------------------------------------------------
        // we have the apiURL in redux, grab that and make url for axios
        let theAPI = this.props.getAPIURL;
        console.log("apiURL:" + theAPI);
        axios({
            method: "get",
            url:
                "https://evgvlc22t1.execute-api.us-east-1.amazonaws.com/UAT/event/retrieve",
            params: {
                eventId: this.state.rallyId
            }
        })
            .then(res => res.data[0])
            .catch(err => console.error(err));
    }
//.then(res => this.props.setEventDetails(res.data[0]))

    // saveVenueToRedux = (res) => {
    //   this.props.setEventDetails(
    //     res.data[0].eDate);

    // }
    // renderMap = () => {
    //     loadScript(
    //         "http://maps.googleapi.com/maps/api/js? key=YOUR_API_KEY_HERE&callback=initMap"
    //     );
    //     window.initMap = this.initMap;
    // };

    // initMap = () => {
    //     const map = new window.google.maps.Map(document.getElementById("map"), {
    //         center: { lat: -34.397, lng: 150.644 },
    //         zoom: 8
    //     });
    // };
    render() {
        return (
            <div>
                <h1>P8 Rally Information</h1>
                <h2>Venue Information</h2>
                <div className='Venue'>
                    <EventDate eventDate={this.props.eDate} />

                    <div className='VenueName'>{this.props.vName}</div>
                    <div className='VenueAddress'>
                        {this.props.vStreet}
                        <br />
                        {this.props.vCity}, {this.props.vState}{" "}
                        {this.props.vZipcode}
                    </div>
                    <EventTimes
                        startTime={this.props.eStart}
                        endTime={this.props.eEnd}
                    />
                    <div>
                        <img src={this.props.eGraphics} width='400' />
                    </div>
                    <Link
                        className='btn btn-primary'
                        to={"/register?id=" + this.props.eid}
                    >
                        <Button color='success'>REGISTER NOW!</Button>
                    </Link>
                    <div className='EventComments'>{this.props.eventNotes}</div>
                    <div className='FurtherInfo'>
                        If you need further information, please contact your CR
                        state rep, or you can contact the supporting state rep.
                        <br />
                    </div>
                    <div className='StateRepInfo'>
                        <font className='stateRepName'>
                            {this.props.eStateRepName}
                        </font>
                        <br />
                        <font className='stateRepEmail'>
                            {this.props.eStateRepEmail}
                        </font>
                        <br />
                        <font className='stateRepPhone'>
                            {this.props.eStateRepPhone}
                        </font>
                    </div>
                    <div className='VenueMap'>
                        <div id='map'></div>

                        {this.props.vMapLink}
                    </div>
                </div>
                {/* {console.log('eid:' + this.props.eid)}
        {console.log('eDate:' + this.props.eDate)}
        {console.log('starttime:' + this.props.eStart)}
        {console.log('rally:' + this.props.rally.eDate)} */}
            </div>
        );
    }
}

// function loadScript(url) {
//     // this creates a reference to the first <script> reference (index)
//     // in the dom, and then inserts a new <script> reference (script)
//     //
//     // this chunk of code literally creates the following javascript
//     // <script src "http...." async defer></script>

//     var index = window.document.getElementsByTagName("script")[0];
//     var script = window.document.createElement("script");
//     script.src = url;
//     script.async = true;
//     script.defer = true;
//     index.parentNode.insertBefore(script, index);
// }
//==============================
// start redux definitions
//==============================
// const mapStateToProps = state => {
//     return {
//         apiURL: state.apiURL,
//         eid: state.eventId,
//         eDate: state.eventDate,
//         eStart: state.eventStartTime,
//         eEnd: state.eventEndTime,
//         eNotes: state.eventNotes,
//         eStateRepName: state.eventStateRepName,
//         eStateRepEmail: state.eventStateRepEmail,
//         eStateRepPhone: state.eventStateRepPhone,
//         eGraphics: state.eventGraphics,
//         vName: state.venueName,
//         vStreet: state.venueStreet,
//         vCity: state.venueCity,
//         vState: state.venueState,
//         vZipcode: state.venueZipcode,
//         vMapLink: state.venueMapLink
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         setEventInfo: rally => dispatch({ type: "SET_RALLY", rally: rally }),
//         setEventID: id =>
//             dispatch({
//                 type: "SET_EVENT_ID",
//                 val: id
//             }),
//         setEventDetails: r =>
//             dispatch({
//                 type: "SET_EVENT_DETAILS",
//                 eDate: r.eDate,
//                 eStart: r.eStartTime,
//                 eEnd: r.eEndTime,
//                 eNotes: r.eNotes,
//                 eStateRepName: r.stateRepName,
//                 eStateRepEmail: r.stateRepEmail,
//                 eStateRepPhone: r.stateRepPhone,
//                 eGraphics: r.eGraphics,
//                 vName: r.churchName,
//                 vStreet: r.churchStreet,
//                 vCity: r.churchCity,
//                 vState: r.churchState,
//                 vZipcode: r.churchZipcode,
//                 vMapLink: r.mapLink
//             })
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Register);
export default Register;
