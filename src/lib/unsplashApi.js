import axios from 'axios';
import {API_KEY} from "../constants/common";

export const unsplashApi = axios.create({
    baseURL: 'https://api.unsplash.com',
});

