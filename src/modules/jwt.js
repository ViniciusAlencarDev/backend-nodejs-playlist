const jwt = require('jsonwebtoken')

const secret = process.env.SECRET;

module.exports = {

    async createToken(id) {
        return await jwt.sign({ id }, secret)
    },

    async verifyToken(req, res, next) {

        const token = req.headers['x-access']

        if(!token) {
            return res.status(404).json({
                success: false,
                data: [],
                error: ['token not found']
            })
        }

        await jwt.verify(token, secret, (err, data) => {

            if(err) {
                return res.status(401).json({
                    success: false,
                    data: [],
                    error: ['token not working']
                })
            }

            req.id = data.id
            next()

        })

    }

}
