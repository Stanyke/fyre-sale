const UserRoutes = require('./userRoutes');
module.exports = (router) => {
    router.use('/api', UserRoutes())

    return router;
}