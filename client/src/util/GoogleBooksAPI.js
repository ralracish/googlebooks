import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "AIzaSyBsEwQAb_DHX2K62w1NddCvDaJn-p96Uko";

export default {
    search: function (query) {
        //let q = (query).split(" ").join("+");
        let q = `${BASEURL}${query}&key=${APIKEY}`;
        console.log(q)
        //return axios.get(BASEURL + q + APIKEY)
        return axios.get(q)
    }
};