const denom = require('../controllers/denom.controller')

module.exports = (app, router) => {
    router.get("/denom/filter", denom.filter)
    app.use(router)
}