import axios from "axios";

const instance = axios.create({
  baseURL: 'https://final-project-backend-1-jccc.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;