const services = () => {

    const database = [

        { "id": 1, "first_name": "Guy", "last_name": "Jirieck", "email": "gjirieck0@over-blog.com", "gender": "Male", "image": "https://robohash.org/enimautculpa.png?size=50x50&set=set1" },
        { "id": 2, "first_name": "Michel", "last_name": "Yakubov", "email": "myakubov1@facebook.com", "gender": "Male", "image": "https://robohash.org/similiqueipsameaque.png?size=50x50&set=set1" },
        { "id": 3, "first_name": "Rafaelia", "last_name": "Limpkin", "email": "rlimpkin2@elpais.com", "gender": "Female", "image": "https://robohash.org/aliquidquasiassumenda.png?size=50x50&set=set1" },
        { "id": 4, "first_name": "Krishnah", "last_name": "Lannin", "email": "klannin3@cbsnews.com", "gender": "Male", "image": "https://robohash.org/placeatdebitissuscipit.png?size=50x50&set=set1" },
        { "id": 5, "first_name": "Maurise", "last_name": "Logg", "email": "mlogg4@ft.com", "gender": "Male", "image": "https://robohash.org/voluptatesetest.png?size=50x50&set=set1" },
        { "id": 6, "first_name": "Bobbee", "last_name": "Jereatt", "email": "bjereatt5@nsw.gov.au", "gender": "Female", "image": "https://robohash.org/autvoluptatemfugit.png?size=50x50&set=set1" },
        { "id": 7, "first_name": "Rossy", "last_name": "Dicky", "email": "rdicky6@blogs.com", "gender": "Male", "image": "https://robohash.org/erroromnisplaceat.png?size=50x50&set=set1" },
        { "id": 8, "first_name": "Adrian", "last_name": "Birds", "email": "abirds7@sakura.ne.jp", "gender": "Male", "image": "https://robohash.org/corporistotamest.png?size=50x50&set=set1" },
        { "id": 9, "first_name": "Phillip", "last_name": "Stovine", "email": "pstovine8@amazonaws.com", "gender": "Male", "image": "https://robohash.org/laborenihilaut.png?size=50x50&set=set1" },
        { "id": 10, "first_name": "Dynah", "last_name": "Fitzackerley", "email": "dfitzackerley9@seesaa.net", "gender": "Female", "image": "https://robohash.org/temporibusvoluptasmagni.png?size=50x50&set=set1" }

    ]

    const getAll = async () => {

        let clients = await database.map(client => {
            return client
        });
        return clients

    }

    const getClient = async (itemId) => {

        let client = await database.filter(client => {
            return client.id === parseInt(itemId);
        });
        return client
        

    }

    const createClient = async ({ id, first_name, last_name, email, gender, image }) => {

        let newClient = await database.push({
            id: parseInt(id),
            first_name: first_name,
            last_name: last_name,
            email: email,
            gender: gender,
            image: image
        });
        return newClient

    }

    const deleteClient = async (clientIndex) => {

        let client = await database.splice(clientIndex, 1 );
        return client

    }

    return {
        getAll,
        getClient,
        createClient,
        deleteClient
    }

}

module.exports = { services };