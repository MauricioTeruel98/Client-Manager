
module.exports = (app, services) => {

    app.get('/clients', (req, res) => {

        services.getAll()
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(500).json(err);
            });

    });

    app.get('/client/:id', (req, res) => {
        var itemId = req.params.id;

        services.getClient(itemId)
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(404).json(err);
            });

    });

    app.post('/create', (req, res) => {
        var newClient = req.body;

        services.createClient(newClient)
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(500).json(err);
            });

    });

    app.delete('/delete/:id', (req, res) => {
        var clientIndex = req.params.id;

        services.deleteClient(clientIndex)
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(500).json(err);
            });


    })

}