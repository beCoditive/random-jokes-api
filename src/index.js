module.exports = {
    joke: function() {
        let jokes  = require('./Assets/joke_list').jokes;
        let j = jokes[Math.floor(Math.random() * jokes.length)]
        return j.joke
    },
    pun: function() {
        let pun  = require('./Assets/pun_list').pun;
        let p = pun[Math.floor(Math.random() * pun.length)]
        return p.joke
    },
    antijoke: function() {
        let anti  = require('./Assets/anti_jokes').anti;
        let a = anti[Math.floor(Math.random() * anti.length)]
        return a.joke
    },
    quotes: function() {
        let quotes  = require('./Assets/quotes_list').quotes;
        let q = quotes[Math.floor(Math.random() * quotes.length)]
        return q.quote
    },
    roast: function() {
        let roast  = require('./Assets/roast_list').roast;
        let r = roast[Math.floor(Math.random() * roast.length)]
        return r.roasts
    },
    uselessweb: function() {
        let web  = require('./Assets/uselesswebList').web;
        let w = web[Math.floor(Math.random() * web.length)]
        return w.url
    }
};