const {User} = require("../models/user")
exports.createUser = async (req, res) => {
    const body = req.body,
    result = await new User(body).save();
    res.send(result)
}
exports.getUsers = async (req, res) => {
    const id = req.params.id,
    result = await User.find(id);
    res.send(result)
}
exports.getUser = async (req, res) => {
    const id = req.params.id,
    result = await User.findById(id);
    res.send(result)
}
exports.loginUser = async (req ,res ) => {
    const {username, password} = req.body;
    const user = await User.findOne({ username });

    console.log(user);
    if (user.password === password) {
        res.send(user);
      } else {
        res.status(401).json({ message: "Username or password is invalid" });
      }
}