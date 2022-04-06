import instance from "../axios";

const destroy = (id) => {
    return instance.delete('/api/v1/files/' + id).then((response) => response.data )
}

const fileApiService = {
    destroy
}

export default fileApiService;