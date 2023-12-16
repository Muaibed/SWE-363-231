const userEmitter = require('./emitterModule');

userEmitter.on('userLoggedIn', (username) => {
    console.log(`TIMESTAMP: ${username} logged in.`);
})

userEmitter.on('userLoggedOut', (username) => {
    console.log(`TIMESTAMP: ${username} logged out`);
})

function userLogin(username) {
    userEmitter.emit('userLoggedIn', username);

    setTimeout(() => {
        userLogin(username);
    }, 2000)
}

function userLogOut(username) {
    userEmitter.emit('userLoggedOut', username);
}

userLogin('User1');
userLogin('User2');