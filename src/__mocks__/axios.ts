
const mockedResponse = {
    data: {

    }
}

export default {
    get: jest.fn().mockResolvedValue(mockedResponse)
}