const ListPemakaiKontrasepsi = require("../model/list_pemakai_kontrasepsi");

exports.create = (req, res) => {
    
    if (!req.body) {
        res.status(400).send({
            message: "Error"
        });
    }
    
    const list_pemakai_kontrasepsi = new ListPemakaiKontrasepsi({

        Id_Propinsi: req.body.Id_Propinsi,
        Id_Kontrasepsi: req.body.Id_Kontrasepsi,
        Jumlah_Pemakai: req.body.Jumlah_Pemakai

    });

    
    ListPemakaiKontrasepsi.create(list_pemakai_kontrasepsi, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the list_pemakai_kontrasepsi."
            });
        else res.send(data);
    });
};


exports.findAll = (req, res) => {
    ListPemakaiKontrasepsi.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ListPemakaiKontrasepsi."
            });
        else res.send(data);
    });
};


exports.findOne = (req, res) => {
    ListPemakaiKontrasepsi.findById(req.params.Id_List, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ListPemakaiKontrasepsi with id ${req.params.Id_List}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving ListPemakaiKontrasepsi with id " + req.params.Id_List
                });
            }
        } else res.send(data);
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Error"
        });
    }

    ListPemakaiKontrasepsi.updateById(
        req.params.Id_List,
        new ListPemakaiKontrasepsi(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found ListPemakaiKontrasepsi with id ${req.params.Id_List}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating ListPemakaiKontrasepsi with id " + req.params.Id_List
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    ListPemakaiKontrasepsi.remove(req.params.Id_List, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ListPemakaiKontrasepsi with id ${req.params.Id_List}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete ListPemakaiKontrasepsi with id " + req.params.Id_List
                });
            }
        } else res.send({ message: `ListPemakaiKontrasepsi was deleted successfully!` });
    });
};

exports.deleteAll = (req, res) => {
    ListPemakaiKontrasepsi.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all ListPemakaiKontrasepsis."
            });
        else res.send({ message: `All ListPemakaiKontrasepsis were deleted successfully!` });
    });
};