import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./Register.css";

const handleChange = event => {
    console.log(event.target.id);
    this.setState.crState = event.target.value;
};

const handleChangeRole = event => {
    console.log(event.target.id);
    this.setstate.crRole = event.target.value;
};

class Register extends Component {
    state = {
        fName: "",
        lName: "",
        email: "",
        phone: "",
        newletter: "",
        registrationCount: 1,
        crName: "",
        crCity: "",
        crState: "",
        crRole: "",
        hostP8: "",
        notes: ""
    };

    handleFormSubmit = async event => {
        event.preventDefault();

        console.log("REGI, REGI");
        console.log(this.state.fName);
        console.log(this.state.lName);
        console.log(this.state.email);
        console.log(this.state.newsletter);
        console.log(this.state.phone);
        console.log(this.state.registrationCount);
        console.log(this.state.crName);
        console.log(this.state.crCity);
        console.log(this.state.crState);
        console.log(this.state.crRole);
        console.log(this.state.hostP8);
        console.log(this.state.notes);
    };

    render() {
        // const classes = useStyles();

        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <h2>Event Registration</h2>

                    <div className='RegisterBox'>
                        <div className='RegInnerBox'>
                            <TextField
                                className='FirstNameInput'
                                label='First Name'
                                id='firstName'
                                size='small'
                                value={this.state.fName}
                                onChange={e =>
                                    this.setState({ fName: e.target.value })
                                }
                            />
                            <TextField
                                className='LastNameInput'
                                label='Last Name'
                                id='lastName'
                                size='small'
                                value={this.state.lName}
                                onChange={e =>
                                    this.setState({ lName: e.target.value })
                                }
                            />
                            <br />
                            <TextField
                                className='EmailInput'
                                label='Email Address'
                                id='email'
                                size='small'
                                value={this.state.email}
                                onChange={e =>
                                    this.setState({ email: e.target.value })
                                }
                                length='100'
                            />
                            <br />
                            <Checkbox
                                value='checked'
                                value={this.state.newsletter}
                                onChange={e =>
                                    this.setState({
                                        newsletter: e.target.value
                                    })
                                }
                            />
                            Subscribe to CR National Newsletter?
                            <br />
                            <TextField
                                label='Telephone'
                                id='telephone'
                                value={this.state.phone}
                                onChange={e =>
                                    this.setState({ phone: e.target.value })
                                }
                                size='small'
                                // paddingBottom='15px'
                            />
                            <br />
                            <p> </p>
                            <br />
                            <hr className='SeparatorLine' />
                            <TextField
                                id='standard-number'
                                className='RegCount'
                                label='Number Registering'
                                type='number'
                                inputProps={{ min: 1 }}
                                value={this.state.registrationCount}
                                onChange={e =>
                                    this.setState({
                                        registrationCount: e.target.value
                                    })
                                }
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                            <br />
                            <TextField
                                label='Church Name'
                                id='crChurchName'
                                size='small'
                                value={this.state.crName}
                                onChange={e =>
                                    this.setState({ crName: e.target.value })
                                }
                                length='50'
                            />
                            <br />
                            <TextField
                                label='City'
                                id='crCity'
                                size='small'
                                value={this.state.crCity}
                                onChange={e =>
                                    this.setState({ crCity: e.target.value })
                                }
                                length='50'
                            />
                            <br />
                            <br />
                            <InputLabel id='state-select-label'>
                                State
                            </InputLabel>
                            <Select
                                className='StateSelect'
                                labelId='state-select-label'
                                label='State'
                                id='crState'
                                value={this.state.crState}
                                onChange={e =>
                                    this.setState({ crState: e.target.value })
                                }
                            >
                                <MenuItem value={"AL"}>Alabama</MenuItem>
                                <MenuItem value={"FL"}>Florida</MenuItem>
                                <MenuItem value={"GA"} selected>
                                    Georgia
                                </MenuItem>
                                <MenuItem value={"KY"}>Kentucky</MenuItem>
                                <MenuItem value={"MS"}>Mississippi</MenuItem>
                                <MenuItem value={"NC"}>North Carolina</MenuItem>
                                <MenuItem value={"SC"}>South Carolina</MenuItem>
                                <MenuItem value={"TN"}>Tennessee</MenuItem>
                                <MenuItem value={"VA"}>Virginia</MenuItem>
                            </Select>
                            <InputLabel
                                className='crRoleLabel'
                                id='crRole-select-label'
                            >
                                What is your role at your CR?
                            </InputLabel>
                            <Select
                                labelId='crRole-select-label'
                                className='crRoleSelect'
                                label='Role'
                                id='crRole'
                                value={this.state.crRole}
                                onChange={e =>
                                    this.setState({ crRole: e.target.value })
                                }
                            >
                                <MenuItem value={"ML"}>
                                    Ministry Leader
                                </MenuItem>
                                <MenuItem value={"TEAM"}>
                                    T.E.A.M. member
                                </MenuItem>
                                <MenuItem value={"VOL"} selected>
                                    Volunteer
                                </MenuItem>
                                <MenuItem value={"ALL"}>Everything</MenuItem>
                                <MenuItem value={"TBD"}>
                                    To Be Determined
                                </MenuItem>
                            </Select>
                            <br />
                            <button className='RegisterButton'>REGISTER</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default Register;
