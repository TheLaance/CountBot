// Require the necessary discord.js classes
const {Client, Events, GatewayIntentBits} = require('discord.js');
const {token, sellchannelId, responseChannelId, inventoryChannelId, buyChannelId} = require('./config.json');
const events = require("events");

// Create a new client instance
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages]});


let prefix = '+';


let botella = 0;
let dinero = 0;
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});


client.on(Events.MessageCreate, async (message) => {
        const responseChannel = client.channels.cache.get(responseChannelId);
        const intentoryChannel = client.channels.cache.get(inventoryChannelId);
        const sellChannell = client.channels.cache.get(sellchannelId);
        if (message.channel.id === sellchannelId) {
            if (message.content.startsWith(prefix)) {
                const [_, amount, product] = message.content.split(' ');
                if (product === 'venta-botella' && botella >= 0) {
                    botella = botella - parseInt(amount);
                    dinero = dinero + (parseInt(amount) * 500);
                    const responseMessage = `¡Se han devuelto ${parseInt(amount) * 500} por la botella de vuelta! ¡La cantidad total es ${dinero}!`;
                    await responseChannel.send(responseMessage);
                    await sellChannell.send('¡Añadido correctamente!');
                    await intentoryChannel.send(`La cantidad de botellas son ${botella}`);
                } else {
                }
            }
        } else if (message.channel.id === buyChannelId) {
            const [_, amount] = message.content.split(' ');
            if (message.content.startsWith(prefix) && parseInt(amount)) {
                botella = parseInt(amount) + botella;
                await intentoryChannel.send(`La cantidad de botellas son ` + botella);
            }
        }
    }
)

// Log in to Discord with your client's token
client.login(token);