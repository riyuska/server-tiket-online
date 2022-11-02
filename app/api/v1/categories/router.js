const express = require("express");
const router = express();
const { create } = require("./controller");

router.get("/categories", (req, res) => {
    const data = [{
            _id: 1,
            name: "Seminar",
        },
        {
            _id: 2,
            name: "MERN22",
        },
    ];

    res.status(200).json({
        data,
    });
});

router.post("/categories", create);

module.exports = router;