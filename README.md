# Random Jokes Api

![npm bundle size](https://img.shields.io/bundlephobia/min/random-jokes-api)
![npm](https://img.shields.io/npm/v/random-jokes-api)

## Bugs and glitches
Feel free to report all bugs and glitches by creating an issue in the [issue section](https://github.com/beCoditive/random-jokes-api/issues/new).

A correct and understandable issue contains :

- Steps to reproduce
- Code that summonned the error
- The complete error

You can also join me on my [discord server](https://discord/5JtJFEcZeP).

<a href="https://discord.gg/5JtJFEcZeP"><img src="https://discord.com/api/guilds/760922672519184384/widget.png" alt="Amandine support server"/></a>

ou can download it from <a href="https://www.npmjs.com/package/random-jokes-api">npmjs</a>.

```cli
npm i random-jokes-api
```

## Configuration

The first step is to import the module in your code.

```js
const Memer = require("random-jokes-api");
```

Then you have to request a API call according to your choice.

```js
// Import the discord.js library.
const Discord = require("discord.js")
// Create a new discord.js client.
const bot = new Discord.Client()

const Memer = require("random-jokes-api");
> You can also destructure to avoid repeating Memer.

// Listen to the ready event
bot.on("ready", () => {
    console.log("Ready!");  
})

// Listen to the message event
bot.on("message", async (message) => {
    if (message.content === "joke") {
        // Get the avatarUrl of the user

        let jokes = Memer.joke()

        message.channel.send(jokes)
    }
})

// Log in to the bot
bot.login("super_secret_token")
````

# Available API Calls

- ``let jokes = Memer.joke()``

- ``let puns = Memer.pun()``

- ``let roast = Memer.roast()``

- ``let antijoke = Memer.antijoke()``

- ``let quotes = Memer.quotes()``

- ``let web = Memer.uselessweb()``

- ``let shower = Memer.showerThought()``

# Image Generation


```js
const Memer = require("random-jokes-api")

const Discord = require("discord.js")

const bot = new Discord.Client()

// Listen to the ready event
bot.on("ready", () => {
    console.log("Ready!");  
})

// Listen to the message event
bot.on("message", async (message) => {
    if (message.content === "meme") {

        let meme = Memer.meme()

        let embed = new Discord.MessageEmbed()
        .setTitle(meme.title)
        .setImage(meme.url)
        .setFooter(`Categroy: ${meme.category}`)

        message.channel.send(embed)
    }
})

````




