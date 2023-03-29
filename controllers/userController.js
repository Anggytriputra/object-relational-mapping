const db = require('../models')
const sequelize = require('sequelize')
// Op => operator
const {Op} = require('sequelize')
// menembak dari db.user folder models
const user = db.User

module.exports = {
    getAllUser: async (req, res) => {
        try {
            // before= SELECT * from user || after in sequelize = findAll()
            const data = await user.findAll({
                // view atrributes in data base with sequelize, before in mysql SELECT id, username, email, ... FROM users
                attributes: ['id', 'username', 'email', 'age', 'createdAt', 'updatedAt'],
                // // where age
                // where: {age: {
                //     // > 25 age
                //     [Op.gt]: 25}}
            })
            res.status(200).send({
                status: true,
                data
            })
        } catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    },

    // // karna sequelize promise base maka kita sync
    getUserById : async (req, res) => {
        try {
            const data = await user.findAll({
                where: {
                    id: req.params.id
                },
                // view atrributes in data base with sequelize, before in mysql SELECT * FROM USER WHERE...
                attributes: ['id', 'username', 'email', 'age', 'createdAt', 'updatedAt']
            })
            res.status(200).send({
                status: true,
                data
            })
            
        } catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    },


    getTotalUser : async (req, res) => {
        try {
            const total = await user.findAll({
                // in mysql aggregate function, AS 'Total user'
                attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'Total user']]
            })
            res.status(400).send({
                status:true,
                total
            })
            
        } catch (err) {
            console.log(err)
            res.status(400).send(err)
            
        }
    },
}