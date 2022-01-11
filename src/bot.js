require("dotenv").config();

// Import the Client class from discord.js & create the client instance
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
    console.log(`Logged in as $ {client.user.tag}!`)
})

client.login(process.env.DISCORDJS_BOT_TOKEN);

// console.log(process.env.DISCORDJS_BOT_TOKEN);