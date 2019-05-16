const api = {
    get: {
        all: {
            endpoint: 'https://swapi.co/api/films/',
            transformers: {
                list: (data) => {
                    return data.map((item) => { return item })
                }
            }
        },
    },
};

const fields = {
    title: {
        editable: false,
        defineable: false,
        deleteable: false,
        listable: true,
    }
}