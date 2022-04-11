import axios from 'axios';
import Cookies from 'js-cookie';



const instance = axios.create({
  // baseURL: 'http://localhost:3000/'
  baseURL: 'https://health-care-historic.herokuapp.com/'
});

instance.interceptors.request.use(authRequestIntercept);

function authRequestIntercept(req) {
  const session = Cookies.get('@session-user');
  if (session) {
    const sessionUser = JSON.parse(session);
    req.headers['access-token'] = sessionUser.accessToken;
    req.headers['client'] = sessionUser.client;
    req.headers['uid'] = sessionUser.uid;
    req.headers['Accept'] = '*/*';
  }
  return req;
}

export default instance;

