import instance from "../axios";

const index = ({ page, q }) => {
  const params = new URLSearchParams({
    page,
    q,
  });
  return instance
    .get("api/v1/treatments?" + params)
    .then((response) => response.data);
};

const create = (treatmentDto) => {
  return instance
    .post("api/v1/treatments", treatmentDto)
    .then((response) => response.data);
};

const update = (id, treatmentDto) => {
  return instance
    .put("api/v1/treatments/"  + id, treatmentDto)
    .then((response) => response.data);
};

const show = (id) => {
  return instance
  .get("api/v1/treatments/" + id)
  .then((response) => response.data);
}

const destroy = (id) => {
  return instance
  .delete("api/v1/treatments/" + id)
}

const treatmentService = {
  index,
  create,
  show,
  update,
  destroy
};

export default treatmentService;
