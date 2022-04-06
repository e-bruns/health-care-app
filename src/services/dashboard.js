import instance from "../axios"

const index = () => {
    return instance.get('/api/v1/dashboard')
    .then((response) => response.data)
}

const dashboardService = {
    index
};

export default dashboardService;