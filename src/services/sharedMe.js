import instance from "../axios";

const index = ({ page, q }) => {
  const params = new URLSearchParams({
    page,
    q,
  });
  return instance
    .get("api/v1/shared_with_me?" + params)
    .then((response) => response.data);
};

// const exam = ({ id, page, q }) => {
//   const params = new URLSearchParams({
//     page,
//     q,
//   });
//   return instance
//     .get("api/v1/share/" + id + "/exam" + params)
//     .then((response) => response.data);
// };


const sharedWithMeService = {
  index
};

export default sharedWithMeService;
