const initialState = {
    apiURL: "https://evgvlc22t1.execute-api.us-east-1.amazonaws.com/UAT/",
    eventId: 0,
    eventDate: "",
    eventStartTime: "",
    eventEndTime: "",
    eventNotes: "",
    eventStateRepName: "",
    eventStateRepEmail: "",
    eventStateRepPhone: "",
    eventGraphics: "",
    venueName: "",
    venueStreet: "",
    venueCity: "",
    venueState: "",
    venueZipcode: "",
    venueMapLink: "",
    authProvider: "",
    authenticated: false,
    userFirstName: "Dano",
    userLastName: "",
    userID: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AUTH_DEFINITION":
            return {
                ...state,
                authDef: action.authDef
            };
        case "SET_USER_INFO":
            return {
                ...state,
                authenticated: true,
                authProvider: action.authProvider,
                userFistName: action.fName,
                userLastName: action.lName,
                userID: action.userID
            };
        case "SET_AUTH_FLAG_TRUE":
            return {
                ...state,
                authenticated: true
            };
        case "SET_AUTH_FLAG_FALSE":
            return {
                ...state,
                authenticated: false
            };
        case "SET_EVENT_ID":
            return {
                ...state,
                eventId: action.val
            };
        case "SET_EVENT_DATE":
            return {
                ...state,
                eventDate: action.val
            };
        case "SET_EVENT_DETAILS":
            return {
                ...state,
                eventDate: action.eDate,
                eventStartTime: action.eStart,
                eventEndTime: action.eEnd,
                eventNotes: action.eNotes,
                eventStateRepName: action.eStateRepName,
                eventStateRepEmail: action.eStateRepEmail,
                eventStateRepPhone: action.eStateRepPhone,
                eventGraphics: action.eGraphics,
                venueName: action.vName,
                venueStreet: action.vStreet,
                venueCity: action.vCity,
                venueState: action.vState,
                venueZipcode: action.vZipcode,
                venueMapLink: action.vMapLink
            };
        default:
    }
    return state;
};
export default reducer;
