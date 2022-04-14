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

const forgot = (email) => {
  return instance
  .post("/api/v1/password/forgot", {
    email,
  }).then(response => response.data)
}

const reset = (email, token, password) => {
  return instance
  .post("/api/v1/password/reset", {
    email,
    password,
    token
  }).then(response => response.data)
}

const changePassword = (changePasswordDto) => {
  return instance.put('auth/password', changePasswordDto).then(response => response.data);
}

const changeProfile = (changeProfileDto) => {
  return instance.put('auth', changeProfileDto).then(response => response.data);
}

const me = () => {
  return instance.get('api/v1/me').then((response) => response.data )
}

const examNew = ({ title, date, exam_location, files }) => {
  return instance
    .post("/api/v1/exams", {
      title,
      date,
      exam_location,
      files
    }).then(response => response.data)
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
  examNew,
  forgot,
  reset,
  changePassword,
  changeProfile,
  me
};

export default authService;