import instance from "../axios";

const lastExams = ({ page, q }) => {
  const params = new URLSearchParams({
    page,
    q,
  });
  return instance
    .get("api/v1/exams?" + params)
    .then((response) => response.data);
};

const lastAppointments = ({ page, search }) => {
  const params = new URLSearchParams({
    page,
    search,
  });
  return instance
    .get("api/v1/medical_appointments?" + params)
    .then((response) => response.data);
};

const lastTreatments = ({ page, search }) => {
  const params = new URLSearchParams({
    page,
    search,
  });
  return instance
    .get("api/v1/treatments?" + params)
    .then((response) => response.data);
};


const lastsRegisters = {
  lastExams,
  lastAppointments,
  lastTreatments,
};

export default lastsRegisters;
