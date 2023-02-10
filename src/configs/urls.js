const baseURL = 'https://owu.linkpc.net/carsAPI/v1'

const urls = {
    cars: '/cars',
}

const cars = {
    cars: {
        urls,
        byId: (id) => `${cars}/${id}`
    }
};

export{baseURL,urls,cars}