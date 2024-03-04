import axios from "axios";

const instance = axios.create({
  baseURL: 'https://final-project-backend-fksz.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;