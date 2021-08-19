# thanks for using Real trickz discord bot basic!
here you can have everything a basic bot have! it took much hours for me to code this so please like! if you want to suppot it would be really good if you can gift me nitro! username **Real trickz#0001**! thanks so much for you guys love and support! i will be making more projects like this!

***IF YOU WANNA BUY ADVANCED BOT THEN U CAN DM ME! IM ALWAYS HAPPY TO MAKE FOR CHEAP PRICE***

** **

# Setup for the bot

if you never have experience creating bot before then i have your back!

** **
***CREATING AN DISCORD BOT APPLICATION***

to create your own first application, you have to head to official discord developer portal! you can redirect to here by pressing [this](https://discord.com/developers/applications)! then press **NEW APPLICATION** button which is located left side of your discord profile picture! [PLEASE MAKE SURE YOU'VE LOGGED IN](https://discord.com/login)! you can name it to whatever you want! it doesnt matter! it may look like this!

<img src="https://i.ibb.co/d7yfYrW/Screenshot-3.png" alt="Screenshot-3" border="0"> **press create button below and you will be at this page!**

** **
<img src="https://i.ibb.co/pyzVkYY/Screenshot-4.png" alt="Screenshot-4" border="0">

**Perefect! now press the BOT text which is show on left side. the extention icon one! the press ADD BOT! and then you will be at this page**

** **
<img src="https://i.ibb.co/TkpsTQR/Screenshot-5.png" alt="Screenshot-5" border="0">

** **
**alright! its all done! now lets get to real developers job! please dont close discord developer portal! it is important in some minuits! alright so lets get to another part!**

** *
# Creating a discord bot

** to create a discord bot we need an code and a file! our main file will be named as `index.js`!**

**first we need to install the package, so please paste this at your terminal! if your at replit then ignore this**

```js
npm i aoi.js
```

**head over there and paste this code! for you i aldredy pasted the code! maybe if you want to make your own code then dont hesitate to git clone this file or copy paste this code! i recomment git clone! anyways here is the code!**

```js
const aoijs = require("aoi.js")

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
    code: `$log[Ready on $userTag[$clientID]! Parasing Packages of $userTag[853222169298599986]]` //Example Ready on Client
})
```
**OP you did it! ok now head over to index.js and then change the `"TOKEN"` to `process.env.token`! this will make your bot token private! now create a `.env` file and paste this!**

```json
token=PASTE_YOUT_TOKEN_HERE
```

**Now we made our token private!**

**Note: IF YOU ARE REPLIT PLEASE PRESS THE LOCK ICON IN UR LEFT SIDE CORNER AND MAKE `NEW ENV` FILE AND NAME IT `token` and put value as ur token!**

**alright you did it! everything cool!**

***
# Creating a command handler

alright! we made an discord bot! now what is a **command handler?** it is an handler which stores a package of commands code in a folder so it may not be messy! lets create those!

**so first recode/replace the index.js to this!**
```js
const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "TOKEN", //Discord Bot Token
prefix: "PREFIX" //Discord Bot Prefix
})
bot.onMessage() //Allows to execute Commands
bot.loadCommands(`./commands/`) //Allows Commands executed by `commands` folder

bot.command({
name: "ping", //Trigger name (command name)
code: `Pong! $pingms` //Code
})

bot.readyCommand({
    code: `$log[Ready on $userTag[$clientID]! Parasing Packages of $userTag[853222169298599986]]` //Example Ready on Client
})

```

**alright! now create a folder named `commands`! andmake a file named `ping.js` and paste this code**

```js
module.exports = ({
  name: "ping", // the command name here
  code: `$title[Ping!] $description[Pong! it took **$pingms**!] $footer[Credits to Real trickz] $color[RANDOM]` // the code is located here!
})
```

** **
# MORE FUNCTIONS EXPLAINED AT 10 LIKES
