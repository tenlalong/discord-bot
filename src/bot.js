require("dotenv").config();
// console.log(process.env.DISCORDJS_BOT_TOKEN);

// Import the Client class from discord.js & create the client instance
const { Client } = require('discord.js');
const client = new Client();

client.login(process.env.DISCORDJS_BOT_TOKEN);





