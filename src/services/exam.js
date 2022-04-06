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

function createFormData(examsDto) {
  const formData = new FormData();
  formData.append("exam[title]", examsDto.title);
  formData.append("exam[date]", examsDto.date);
  formData.append("exam[exam_location]", examsDto.date);
  for (let i = 0; i < examsDto.files.length; i++) {
    formData.append("exam[files][]", examsDto.files[i]);
  }
  return formData;
}


const create = (examsDto) => {
   return instance
    .post("api/v1/exams", createFormData(examsDto), {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
};

const update = (id, examsDto) => {
  console.log(examsDto);
  return instance
    .put("api/v1/exams/" + id, createFormData(examsDto))
    .then((response) => response.data);
};

const show = (id) => {
  return instance.get("api/v1/exams/" + id).then((response) => response.data);
};

const destroy = (id) => {
  return instance.delete("api/v1/exams/" + id);
};

const examsService = {
  index,
  create,
  show,
  update,
  destroy,
};

export default examsService;
