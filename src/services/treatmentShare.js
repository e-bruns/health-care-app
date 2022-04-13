import instance from "../axios";

const index = ({ page, q, parameter }) => {
  const params = new URLSearchParams({
    page,
    q,
  });
  return instance
    .get(`api/v1/shares/${parameter}/treatments?` + params)
    .then((response) => response.data);
};


const show = (shareId, treatmentId) => {
  return instance.get(`api/v1/shares/${shareId}/treatments/${treatmentId}`).then((response) => response.data);
};

const treatmentShareService = {
  index,
  show,
};

export default treatmentShareService;
