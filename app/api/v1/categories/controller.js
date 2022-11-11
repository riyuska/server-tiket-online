const Categories = require("./model");
const {
    getAllCategories,
    createCategories,
    getOneCategories,
    updateCategories,
    deleteCategories,
} = require("../../../services/mongoose/categories");

// Untuk create**************************************************************
const create = async(req, res, next) => {
    try {
        const result = await createCategories(req);

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
        const result = await getAllCategories(); // menampilkan id dan name saja
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
        // const { id } = req.params;

        const hasil = await getOneCategories(req);
        // data lama*****
        // if (!hasil) {
        //     return res.status(404).json({ message: "Id Categories tidak ditemukan" });
        // }

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
        // const { id } = req.params;
        // const { name } = req.body;

        const result = await updateCategories(req);

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
        // const { id } = req.params;
        const result = await deleteCategories(req);
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