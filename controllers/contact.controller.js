
const db = require('../models');
const models = db.Contacts;

function storeData(req, res) {
    const data = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        gender: req.body.gender,
    }

    models.create(data).then(result => {
        res.status(200).json({
            message: "Data stored successfully",
            data: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Data cannot be stored",
            error: error
        })

    })
}

function allData(req, res) {

    models.findAll({attributes: ['id', 'name', 'email', 'phoneNumber', 'address', 'gender']}).then(result => {
        res.status(200).json({
            message: "Data send successfully",
            data: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Data cannot be send",
            error: error
        })

    })
}

function singleData(req, res) {
    const ids = req.params.id;
    models.findByPk(ids,{attributes:{ exclude:['createdAt','updatedAt','id']}}).then(result => {
        res.status(200).json({
            message: "Single data send successfully",
            data: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        })

    })
}

function updateData(req, res) {
    const id = req.params.id;
    const updateData = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        gender: req.body.gender,
    }

    models.update(updateData, {where: {id:id}}).then(result => {
        res.status(200).json({
            message: "Data updated successfully",
            post: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Data cannot be updated",
            error: error
        })

    })
}

function deleteData(req, res) {
    const id = req.params.id;
    
    models.destroy({where: {id:id}}).then(result => {
        res.status(200).json({
            message: "Data deleted successfully"
        })
    }).catch(error => {
        res.status(500).json({
            message: "Data cannot be deleted",
            error: error
        })

    })
}

module.exports = {
    storeData: storeData,
    allData: allData,
    updateData: updateData,
    deleteData: deleteData,
    singleData: singleData
}