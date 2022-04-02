import instance from "../axios";
import Cookies from "js-cookie";
const login = (email, password) => {
  return instance
    .post("/auth/sign_in", {
      email,
      password,
    })
    .then(setSessionApiToken);
};

const logout = () => {
  Cookies.remove("@session-user");
};

const register = ({ name, password, email, kind, cell_phone, crm }) => {
  return instance
    .post("/auth", {
      email,
      password,
      name,
      kind,
      cell_phone,
      crm,
    })
    .then(setSessionApiToken);
};

const setSessionApiToken = (response) => {
  const sessionUser = {
    accessToken: response.headers["access-token"],
    client: response.headers["client"],
    uid: response.headers["uid"],
    name: response.data.data["name"]
  };

  if (sessionUser.accessToken) {
    Cookies.set("@session-user", JSON.stringify(sessionUser));
  }

  return sessionUser;
};

const authService = {
  login,
  logout,
  register,
};

export default authService;