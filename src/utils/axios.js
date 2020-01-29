import axios from "axios";

const instance = axios.create({
    baseURL: "https://evgvlc22t1.execute-api.us-east-1.amazonaws.com/UAT"
});

export default instance;
