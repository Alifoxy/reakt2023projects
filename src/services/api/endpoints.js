export const baseURL = 'https://owu.linkpc.net/carsAPI/v1'

export const urls = {
    cars: '/cars',
}

export const cars = {
    cars: {
        urls,
        byId: (id) => `${cars}/${id}`
    }
}