// import model categories
const Categories = require("../../api/v1/categories/model");
const { BadRequestError } = require("../../errors");

// import custom error not found dan bad request
//const { NotFoundError, BadRequestError } = require("../../errors");

const getAllCategories = async(req) => {
    const result = await Categories.find();

    return result;
};

const createCategories = async(req) => {
    const { name } = req.body;

    // cari categories dengan field name
    const check = await Categories.findOne({ name });

    // apa bila check true / data categories sudah ada maka kita tampilkan error bad request dengan message kategori nama duplikat
    if (check) throw new BadRequestError("kategori nama duplikat");

    const result = await Categories.create({ name });

    return result;
};

module.exports = { getAllCategories, createCategories };