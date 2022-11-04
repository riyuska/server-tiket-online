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
const find = async(req, res, next) => {
    try {
        const { id } = req.params;

        const hasil = await Categories.findOne({ _id: id });

        if (!hasil) {
            return res.status(404).json({ message: "Id Categories tidak ditemukan" });
        }

        res.status(200).json({
            data: hasil,
        });
    } catch (err) {
        next(err);
    }
};
// **************************************************************************
// Menit 1.01

// Update ***************************************************************
const update = async(req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const result = await Categories.findOneAndUpdate({
            _id: id,
        }, { name }, { new: true, runValidators: true });

        res.status(200).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};
// **************************************************************************

// Delete **************************************************************************
const destroy = async(req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Categories.findByIdAndRemove(id);
        res.status(200).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};
// **************************************************************************

module.exports = {
    index,
    find,
    update,
    destroy,
    create,
};