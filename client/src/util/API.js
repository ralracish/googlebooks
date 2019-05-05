import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "AIzaSyBsEwQAb_DHX2K62w1NddCvDaJn - p96Uko";

export default {
    search: function (query) {
        let q = (query).split(" ").join("+");
        return axios.get(BASEURL + q + APIKEY)
    },
    getBooks: function () {
        return axios.get("/books")
    },
    deleteBooks: function (id) {
        return axios.delete("/books/" + id)
    }
    
};