const ListPropinsi = require("../model/list_propinsi");
exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const list_propinsi = new ListPropinsi({
        nama_propinsi: req.body.nama_propinsi,


    });

    ListPropinsi.create(list_propinsi, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the List_Propinsi."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    ListPropinsi.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ListPropinsi."
            });
        else res.send(data);
    });
};


exports.findOne = (req, res) => {
    ListPropinsi.findById(req.params.id_propinsi, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ListPropinsi with id ${req.params.id_propinsi}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving ListPropinsi with id " + req.params.id_propinsi
                });
            }
        } else res.send(data);
    });
};

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    ListPropinsi.updateById(
        req.params.id_propinsi,
        new ListPropinsi(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found ListPropinsi with id ${req.params.id_propinsi}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating ListPropinsi with id " + req.params.id_propinsi
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    ListPropinsi.remove(req.params.id_propinsi, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ListPropinsi with id ${req.params.id_propinsi}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete ListPropinsi with id " + req.params.id_propinsi
                });
            }
        } else res.send({ message: `ListPropinsi was deleted successfully!` });
    });
};

exports.deleteAll = (req, res) => {
    ListPropinsi.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all ListPropinsis."
            });
        else res.send({ message: `All ListPropinsis were deleted successfully!` });
    });
};