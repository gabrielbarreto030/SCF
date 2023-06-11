var data =  require("./fakeData");

const getUser = (req, res, next) => {
    const { name } = req.query;
    const user = data.find(user => user.name === name);

    if (user) {
        return res.send(user);
    }

    res.status(404).send('Usuário não foi encontrado');
};

const getUsers = (req, res, next) => {
    res.send(data);
};
module.exports = {
    getUser,
    getUsers
};