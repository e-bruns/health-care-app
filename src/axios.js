import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://health-care-historic.herokuapp.com/'
});

export default instance;