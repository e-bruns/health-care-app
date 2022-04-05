import instance from "../axios";

const index = ({ page, search }) => {
  const params = new URLSearchParams({
    page,
    search,
  });
  return instance
    .get("api/v1/exams?" + params)
    .then((response) => response.data);
};

const create = (examsDto) => {
  return instance
    .post("api/v1/exams", examsDto)
    .then((response) => response.data);
};

const update = (id, examsDto) => {
  return instance
    .put("api/v1/exams/" + id, examsDto)
    .then((response) => response.data);
};

const show = (id) => {
  return instance
    .get("api/v1/exams/" + id)
    .then((response) => response.data);
};

const destroy = (id) => {
  return instance
    .delete("api/v1/exams/" + id);
};

const examsService = {
  index,
  create,
  show,
  update,
  destroy
};

export default examsService;
