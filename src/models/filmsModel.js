export const api = {
    get: {
        all: {
            endpoint: 'https://swapi.co/api/films/',
            transformers: {
                list: (data) => {
                    const returnObject = {
                        count: data.count,
                        next: data.next,
                        previous: data.previous,
                        results: data.results.map((item) => {
                            return {
                                title: item.title,
                                episodeNumber: item.episode_id,
                            }
                        }),
                    };
                    return returnObject;
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