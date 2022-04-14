import axios from "axios";
import Cookies from "js-cookie";
import authService from "./services/auth";

const instance = axios.create({
   baseURL: 'https://health-care-historic.herokuapp.com/'
});

instance.interceptors.request.use(authRequestIntercept);
instance.interceptors.response.use(
  (authResponse) => {
    return authResponse;
  },
  (error) => {
    if ([401, 403].includes(error.response.status)) {
      authService.logout();
      window.location.href = "/";
    }
    throw error;
  }
);

function authRequestIntercept(req) {
  const session = Cookies.get("@session-user");
  if (session) {
    const sessionUser = JSON.parse(session);
    req.headers["access-token"] = sessionUser.accessToken;
    req.headers["client"] = sessionUser.client;
    req.headers["uid"] = sessionUser.uid;
    req.headers["Accept"] = "*/*";
  }
  return req;
}

export default instance;
