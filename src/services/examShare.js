import instance from "../axios";

const index = ({ page, q, parameter }) => {
  const params = new URLSearchParams({
    page,
    q,
  });
  return instance
    .get(`api/v1/shares/${parameter}/exams?` + params)
    .then((response) => response.data);
};


const show = (id) => {
  return instance.get("api/v1/exams/" + id).then((response) => response.data);
};

const examsShareService = {
  index,
  show,
};

export default examsShareService;
