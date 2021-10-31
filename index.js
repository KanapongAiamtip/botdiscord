const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv')

dotenv.config();

const client = new Client(
    {
        intents:[
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
        ]
    }
);

const random_num =() => {
    return Math.floor(Math.random() *10);
}

client.on('ready', () => {
    console.log('your bot is ready')
})


client.on('messageCreate', msg =>{
    let menu = ['Noodle','Boiled rice','Salad','Pad Thai','Fired egg','Som Tum','Steak','Sausage','Spicy Crab Salad','Tom yum kung']

    if(msg.content == 'หิวข้าวจัง')
    {
        msg.reply(menu[random_num()])
    }
}) 

client.login(process.env.TOKEN)
  