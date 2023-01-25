import axios from "axios";

const instance = axios.create({

    //THE API (clould function) URL
    baseURL: 'https://us-central1-ecommerce-f4b53.cloudfunctions.net/api' //THE API (cloud function) URL
});

export default instance;