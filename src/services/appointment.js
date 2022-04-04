import instance from "../axios";

const index = ({ page, search }) => {
  const params = new URLSearchParams({
    page,
    search,
  });
  return instance
    .get("api/v1/medical_appointments?" + params)
    .then((response) => response.data);
};

const create = (medical_appointmentsDto) => {
  return instance
    .post("api/v1/medical_appointments", medical_appointmentsDto)
    .then((response) => response.data);
};

const update = (id, medical_appointmentsDto) => {
  return instance
    .put("api/v1/medical_appointments/" + id, medical_appointmentsDto)
    .then((response) => response.data);
};

const show = (id) => {
  return instance
    .get("api/v1/medical_appointments/" + id)
    .then((response) => response.data);
};

const destroy = (id) => {
  return instance
    .delete("api/v1/medical_appointments/" + id);
};

const appointmentsService = {
  index,
  create,
  show,
  update,
  destroy
};

export default appointmentsService;
