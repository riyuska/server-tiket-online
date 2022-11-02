const Categories = require("./model");

// Untuk create**************************************************************
const create = async(req, res, next) => {
    try {
        const { name } = req.body;

        const result = await Categories.create({ name });
        res.status(201).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};
// **************************************************************************

// Untuk Get All Aplikasi*****************************************************
const index = async(req, res, next) => {
    try {
        const result = await Categories.find().select("_id name"); // menampilkan id dan name saja
        res.status(200).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

// **************************************************************************

// Find Single***************************************************************

module.exports = {
    index,
    create,
};