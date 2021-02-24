module.exports = {
    joke: function() {
        let jokes  = require('./Assets/joke_list').jokes;
        let j = jokes[Math.floor(Math.random() * jokes.length)]
        return q.joke
    },
    pun: function() {
        let pun  = require('./Assets/pun_list').pun;
        let p = pun[Math.floor(Math.random() * pun.length)]
        return p.joke
    }
};