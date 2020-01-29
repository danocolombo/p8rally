import React, { Component } from "react";
import RallyItem from "../RallyItem/RallyItem";
import classes from "./Rallies.css";
class Rallies extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            rallyevent: [],
            planets: {}
        };
    }

    componentDidMount() {
        this.getData0();
    }

    getData0() {
        //--------------------------------------------
        // this calls the RDS database
        //--------------------------------------------
        fetch(
            "https://evgvlc22t1.execute-api.us-east-1.amazonaws.com/UAT/events/active/approved"
        )
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    getData() {
        //--------------------------------------------
        // this calls the dynamodb database
        //--------------------------------------------
        let rallyevent = "<p>something went wrong</p>";
        // https://ou1b9hxpma.execute-api.us-east-1.amazonaws.com/UAT/events
        fetch(
            "https://ou1b9hxpma.execute-api.us-east-1.amazonaws.com/UAT/events"
        ).then(resp => {
            resp.json().then(res => {
                this.setState({ rallyevent: this.state.rallyevent.push("A") });
                this.setState({ data: res.Items });
            });
        });
    }

    rallySelectedHandler = eventID => {
        // this.setState({selectedRallyDate: eventID});
        console.log("the clicked event was:");
        // console.log(query.get("id"))
        console.log(eventID);
        window.location.assign("/rally?ID=" + eventID);
        // window.location.assign('/search/'+this.state.query+'/some-action');
    };

    render() {
        function dynamicSort(property) {
            var sortOrder = 1;
            if (property[0] === "-") {
                sortOrder = -1;
                property = property.substr(1);
            }
            return function(a, b) {
                if (sortOrder === -1) {
                    return b[property].localeCompare(a[property]);
                } else {
                    return a[property].localeCompare(b[property]);
                }
            };
        }

        if (!this.state.error) {
            if (this.state.data) this.state.data.sort(dynamicSort("eventDate"));
        }
        return (
            <section>
                <h2 className={classes.h2}>Upcoming Rallies</h2>
                <p className={classes.intro}>
                    Please review the upcoming events and click the register
                    button to RSVP
                </p>
                {this.state.data ? (
                    this.state.data.map(item => (
                        <RallyItem
                            key={item.id}
                            eventID={item.id}
                            eventDate={item.eventDate}
                            locationName={item.churchName}
                            locationStreet={item.churchStreet}
                            locationCity={item.churchCity}
                            locationState={item.churchState}
                            locationZipcode={item.churchZipcode}
                            clicked={() => this.rallySelectedHandler(item.id)}
                        />
                    ))
                ) : (
                    <h3>Getting data from cloud, just a moment.</h3>
                )}
            </section>
        );
    }
}
export default Rallies;

