import instance from "../axios";

const index = ({ page, q, parameter }) => {
  const params = new URLSearchParams({
    page,
    q,
  });
  return instance
    .get(`api/v1/shares/${parameter}/medical_appointments?` + params)
    .then((response) => response.data);
};


const show = (shareId, appointmentId) => {
  return instance.get(`api/v1/shares/${shareId}/medical_appointments/${appointmentId}`).then((response) => response.data);
};

const appointmentShareService = {
  index,
  show,
};

export default appointmentShareService;
