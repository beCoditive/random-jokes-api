# Bugs and glitches
Feel free to report all bugs and glitches by creating an issue in the [issue section](https://github.com/beCoditive/discord-memer/issues/new).

A correct and understandable issue contains :

- Steps to reproduce
- Code that summonned the error
- The complete error

You can also join me on my [discord server](https://discord/5JtJFEcZeP).
<a href="https://discord.gg/5JtJFEcZeP"><img src="https://discord.com/api/guilds/760922672519184384/widget.png" alt="Amandine support server"/></a>

ou can download it from <a href="https://www.npmjs.com/package/discord-memer">npmjs</a>.

```cli
npm i discord-memer
```

# Configuration

The first step is to import the module in your code.

```js
const Memer = require("discord-memer");
```

Then you have to request a API call according to your choice.

```js
// Import the discord.js library.
const Discord = require("discord.js")
// Create a new discord.js client.
const bot = new Discord.Client()

const Memer = require("discord-memer");
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
