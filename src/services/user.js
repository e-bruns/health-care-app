import instance from "../axios";

const index = (q = undefined) => {
  return instance.get('api/v1/users?q=' + q).then(res => res.data)
}

const userService = {
  index
}

export default userService;