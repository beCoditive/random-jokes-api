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
    },
    showerThought: function() {
        let shower  = require('./Assets/shower_list').shower;
        let s  = shower[Math.floor(Math.random() * shower.length)]
        return s.thought
    },
    meme: function() {
        let memes  = require('./Assets/memes_list.json');
        let m  = memes[Math.floor(Math.random() * memes.length)]
        return m
    },
    chuckNorris: function() {
        let chunk  = require('./Assets/chunk_norris.json');
        let c  = chunk[Math.floor(Math.random() * chunk.length)]
        return c.norris
    },
    trivia: function() {
        let trivia  = require('./Assets/trivia_q.json');
        let t  = trivia[Math.floor(Math.random() * trivia.length)]
        return t
    },
    copmliment: function() {
        let copmliment  = require('./Assets/compliment.json');
        let c  = copmliment[Math.floor(Math.random() * copmliment.length)]
        return c.here
    },
    truth: function() {
        let truth  = require('./Assets/truth.json');
        let c  = truth[Math.floor(Math.random() * truth.length)]
        return c.truth
    },
    dare: function() {
        let truth  = require('./Assets/dare.json');
        let d  = truth[Math.floor(Math.random() * truth.length)]
        return d.dare
    }
};