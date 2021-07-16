const { use } = require("chai");

const response = require('../res/config.res')
const denom_router = require('../../modules/denom/routers/denom.router')

module.exports = (app, router) => {
    app.get('/', (req, res) => {
        response.customError(200, 'Server running', res)
    })
    denom_router(app, router)
}