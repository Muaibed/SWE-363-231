const Emitter = require('events');

class UserEventEmitter extends Emitter {}

const userEmitter = new UserEventEmitter();

module.exports = userEmitter;