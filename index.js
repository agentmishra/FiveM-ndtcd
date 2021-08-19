const aoijs = require("aoi.js") // installs aoi.js

const bot = new aoijs.Bot({
token: "TOKEN", //Discord Bot Token
prefix: "PREFIX" //Discord Bot Prefix
})
bot.onMessage() //Allows to execute Commands

bot.command({
name: "ping", //Trigger name (command name)
code: `Pong! $pingms` //Code
})

bot.readyCommand({
    code: `$log[Ready on $userTag[$clientID]! Credits to Real trickz!]`
})
