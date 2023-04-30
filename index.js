// Require the necessary discord.js classes
const {Client, Events, GatewayIntentBits} = require('discord.js');
const {token} = require('./config.json');
const events = require("events");

// Create a new client instance
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages]});


let prefix = '+';
let prefixCommand = '!';
const channelId = '1101980297693757493';
const responseChannelId = '1101987891841867936';
const inventoryChannelId = '1102053614115094618';
const buyChannelId = '1101980297693757492';

const responseChannel = client.channels.cache.get(responseChannelId);

let botella=0;
let dinero=0;
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});


client.on(Events.MessageCreate, async (message) => {
        if (message.channel.id === channelId) {
            console.log(message.content);
            const [_, amount, product] = message.content.split(' ');
            console.log(_ + ' + ' + amount + ' + ' + product);
            if (product === 'venta-botella') {
                const intentoryChannel = client.channels.cache.get(inventoryChannelId);
                const responseChannel = client.channels.cache.get(responseChannelId);
                botella = botella-parseInt(amount) ;
                dinero = dinero + (parseInt(amount)*500);
                const responseMessage = `¡Se han devuelto ${parseInt(amount) * 500} por la botella de vuelta! ¡La cantidad total es ${dinero}!`;
                await responseChannel.send(responseMessage);
                await intentoryChannel.send(`La cantidad de botellas son ${botella}`);
            }
        } else if (message.channel.id === buyChannelId) {
            const [_, amount] = message.content.split(' ');
            const intentoryChannel = client.channels.cache.get(inventoryChannelId);
            console.log(_ + ' + ' + parseInt(amount));
            botella = parseInt(amount) + botella;
            console.log(amount);
            await intentoryChannel.send(`La cantidad de botellas son `+ botella);
        }
    }
)

// Log in to Discord with your client's token
client.login(token);