const Alpha = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

if (Config.WORKTYPE == 'public') {

    Alpha.addrex({pattern: 'cmd', fromMe: true,  deleteCommand: false }, (async (message, match) => {

            var image = await axios.get ('https://i.ibb.co/hsz5q3S/Main-LOgo.jpg', {responseType: 'arraybuffer'})//ඔය ලින්ක් එකට  ඕන ෆොටෝ එකේ ලින්ක් එක දන්න. 💫

        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: ` Inuka Tech`,quoted: message.data})//ඔතන  ඕන මැස්වෙජ් එක දාන්න.💫

    }));
    
} 
