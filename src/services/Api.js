//HACE LA PETICIÓN A LA API
function getFromApi() {
    return fetch('https://rickandmortyapi.com/api/character/?page=1')
        //PASA DATOS A JSON
        .then(response => response.json())
        //COGEMOS DATOS QUE SON RELEVANTES, COMO LA INFO DE LA API ES UN ARRAY, LO HACEMOS CON MAP
        .then(json => {

            return json.results

                .map(character => {
                    return {
                        id: character.id,
                        name: character.name,
                        species: character.species,
                        image: character.image,
                        status: character.status,
                        origin: character.origin.name,
                        episode: character.episode.map(episodes => { return (character.episode); }),
                        numberOfEpisodes: character.episode.length

                    };
                })


        });
}

function getPagesFromApi() {
    return (
        fetch('https://rickandmortyapi.com/api/character/?page=1')
            .then(response => response.json())
            .then(info => {
                return {
                    count: info.info.count,
                    pages: info.info.pages,
                    next: info.info.next,
                    prev: info.info.prev
                }
            })
    )
}

const nextPages = (pageNum) => {
    if (pageNum !== null) {
        return (
            fetch(`https://rickandmortyapi.com/api/character/?page=${pageNum}`)
                .then(response => response.json())
                .then(data => {
                    return data.results.map((character) => {
                        return {
                            image: character.image,
                            name: character.name,
                            species: character.species,
                            id: character.id,
                            status: character.status,
                            origin: character.origin.name,
                            episodes: character.episode,
                            numberOfEpisodes: character.episode.length
                        }
                    })
                })
        )
    }

}




const objectToExport = {
    getFromApi: getFromApi,
    getPagesFromApi: getPagesFromApi,
    nextPages: nextPages
};

// Exportamos el objeto para que pueda ser usado desde App
export default objectToExport;
