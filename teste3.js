var data = require("./fakeData");

module.exports = function(req, res) {
    var name = req.query.name;

    for (let i = 0; i < data.length; i++) {
        if (data[i].name === name) {
            data.splice(i, 1);
            return res.send("success");
        }
    }

    res.status(404).send("Usuário não foi encontrado");
};