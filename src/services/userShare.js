import instance from "../axios";

const create = (userShareDto) => {
  return instance.post('api/v1/user_shares', userShareDto).then(response => response.dta);
};

const index = ({ page, q }) => {
  const params = new URLSearchParams({
    page,
    q,
  });
  return instance
    .get("api/v1/user_shares?" + params)
    .then((response) => response.data);
};

const cancelShare = (userShareId) => {
  return instance.delete("api/v1/user_shares/" + userShareId)
}

// isso é um teste
const userShareService = {
  create,
  index,
  cancelShare
};

export default userShareService;
