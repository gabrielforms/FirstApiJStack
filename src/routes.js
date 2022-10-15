const UserController = require('./controllers/UserController');

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: UserController.listusers,
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: UserController.getUserById,
    },
    {
        endpoint: '/users',
        method: 'POST',
        handler: UserController.createUser,
    },
]