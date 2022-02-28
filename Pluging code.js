const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

if (Config.WORKTYPE == 'public') {


    Trex.addrex({pattern: ' Tyep Your cmd', fromMe: true,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/', {responseType: 'arraybuffer'})//ඔය ලින්ක් එකට  ඕන ෆොටෝ එකේ ලින්ක් එක දන්න. 💫
            
        await conn.sendMessage(conn.user.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: 'any massage tyep here',quoted: message.data})//ඔතන  ඕන මැස්වෙජ් එක දාන්න.💫
        
        

     }));
}
    
else if (Config.WORKTYPE == 'private') {
        
    Trex.addrex({pattern: ' Tyep Your cmd', fromMe: true,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/', {responseType: 'arraybuffer'})//ඔය ලින්ක් එකට  ඕන ෆොටෝ එකේ ලින්ක් එක දන්න. 💫
            
        await conn.sendMessage(conn.user.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: 'any massage tyep here',quoted: message.data})//ඔතන  ඕන මැස්වෙජ් එක දාන්න.💫
        
        

    }));
    
    
}
