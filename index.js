const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const axios = require("axios")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const kurr = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const gcdetect = JSON.parse(fs.readFileSync('./database/gcdetect.json'))
const brightcolor  = require('colors');
const encodeUrl = require('encodeurl')
const chalk = require('chalk')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
shp = '⬡'
spc1 = '           '

spc2 = '\n                '
spc3 = '                   '
spc4 = '       '

require('./kurr.js')
nocache('./kurr.js', module => console.log(`${module} is now updated!`))

const starts = async (kurr = new WAConnection()) => {
	console.log(color('SOURCE CODE INI DIJAGA DAN DI LINDUNGI OLEH KURRXD\n\n', 'orange'), color('\n======TERIMKASIH BANYAK KEPADA======\n•Aldy Fauzy\n•Kemol\n•ADI\n•KurrXd\n•YUDHA\n•PAJARn•Dcode Denpa\n•Finx\n•SELURUH SUBSCRIBERKU', 'yellow'))
	console.log(color('\n\nJANGAN DI JUAL  BRO😑\nKALAU ADA YG JUAL SURUH CHAT ©KurrXd\nWA 6281220670449', 'pink'))
    kurr.logger.level = 'warn'
    kurr.version = [2, 2143, 3]
    kurr.browserDescription = [ 'kurr', 'Chrome', '3.0' ]
    
    kurr.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && kurr.loadAuthInfo('./session.json')
    kurr.on('connecting', () => {
        start('2', 'Connecting...')
    })
    kurr.on('open', () => {
        success('2', 'Connected')
        setTimeout( () => { 	
	    	}, 1000)    		    	     	
    })
    await kurr.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(kurr.base64EncodedAuthInfo(), null, '\t'))
        
        

    kurr.on('chat-update', async (message) => {
        require('./kurr.js')(kurr, message)
        ownerNumber = ["6283102176419@s.whatsapp.net","6283129109022@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "6283102176419@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   

kurr.on('group-participants-update', async (anu) => {
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
if (!welkom.includes(anu.jid)) return
		try {
		    fkontakk = { key: {
		    fromMe: false,
		    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6281220670449-6281220670449@g.us' } : {})
		    },
		    message: {
		    "contactMessage":{"displayName":fake,"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;kurr;;;\nFN:kurr\nitem1.TEL;waid=6281220670449:+62 81220670449\nitem1.X-ABLabel:Mobile\nEND:VCARD"
		     }}}
		     const mdata = await kurr.groupMetadata(anu.jid)
         num = anu.participants[0]
         console.log(anu)
         ini_user = kurr.contacts[num]
         namaewa = ini_user.notify
         member = mdata.participants.length
          try {
               var ppimg = await kurr.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
            try {
                var ppgc = await kurr.getProfilePicture(anu.jid)
            } catch {
               var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
        shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
            if (anu.action == 'add') {
            img = await getBuffer(`https://ziy.herokuapp.com/api/author/welcome1?pp=${shortpc.data}&nama=${encodeUrl(namaewa)}&namagc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&bg=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&member=${mdata.participants.length}`)
            teks = `
Halo @${num.split('@')[0]} 👋\nSelamat datang di Grup
*${mdata.subject}*

Intro Member Baru
${shp} Nama:
${shp} Umur:
${shp} Status:
${shp} Askot:
`
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1

mhan = await kurr.prepareMessage(mdata.id, kma, image, {thumbnail: img})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
kurr.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
sendButImage(mdata.id, teks, 'Sering nimbrung dan baca rules grup', img, [{buttonId: 'mam', buttonText: {displayText: 'Welcome kak 👋'}, type: 1},{buttonId: '!sc', buttonText: {displayText: 'Moga Betah Ya️'}, type: 1}], {thumbnail: img, "contextInfo": {mentionedJid: [num]}, quoted: {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `subscribe : xZiyy`, 'jpegThumbnail': fs.readFileSync('./media/thumb.jpg')}}}})
      
}
if (anu.action == 'remove') {
buffa = await getBuffer(`https://ziy.herokuapp.com/api/author/goodbye1?pp=${shortpc.data}&nama=${encodeUrl(namaewa)}&namagc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&bg=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&member=${mdata.participants.length}`)
teks = `${namaewa} sayoooonara👋`
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await kurr.prepareMessage(mdata.id, kma, image, {thumbnail: buffa})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
kurr.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
sendButImage(mdata.id, teks, 'akhir nya beban group berkurang 1', buffa, [{buttonId: 'X - Dev Team', buttonText: {displayText: 'Bye 👋'}, type: 1}], {thumbnail: buffa, "contextInfo": {mentionedJid: [num]}, quoted: {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `subscribe : xZiyy`, 'jpegThumbnail': fs.readFileSync('./media/thumb.jpg')}}}})
}
if (anu.action == 'promote') {
img = await getBuffer(`https://ziy.herokuapp.com/api/author/promote?pp=${shortpc.data}&nama=${encodeUrl(namaewa)}&namagc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&bg=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&member=${mdata.participants.length}`)
teks =`
selamat kamu telah menjadi admin group
`
//kurr.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
kurr.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]},
            
quoted: {
"key": {
"fromMe": false,
"participant": `0@s.whatsapp.net`,
"remoteJid": `0@s.whatsapp.net`
},
"message": {
"groupInviteMessage": {
"groupJid": "628983583288-1620319322@g.us",
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": "IstMekurr",
"jpegThumbnail": fs.readFileSync('./media/thumb.jpg'),
"caption": `kurr XD`
}

}
}
})
} else if (anu.action == 'demote') {
img = await getBuffer(`https://ziy.herokuapp.com/api/author/demote?pp=${shortpc.data}&nama=${encodeUrl(namaewa)}&namagc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&bg=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&member=${mdata.participants.length}`)
teks = `awokawokawok gimana rasa nya di demote🐦`
//kurr.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
kurr.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]},
quoted: {
"key": {
"fromMe": false,
"participant": `0@s.whatsapp.net`,
"remoteJid": `0@s.whatsapp.net`
},
"message": {
"groupInviteMessage": {
"groupJid": "628983583288-1620319322@g.us",
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": "IstMekurr",
"jpegThumbnail": fs.readFileSync('./media/thumb.jpg'),
"caption": `kurr XD`
}
}
}
})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})

//-----------------< ANTI DELETE >---------------------\\
antidel = true
  kurr.on("message-delete", async (m) => {
    if (m.key.remoteJid == "status@broadcast") return;
    if (!m.key.fromMe && m.key.fromMe) return;
    if (antidel === false) return m.message =
      Object.keys(m.message)[0] === "ephemeralMessage"
        ? m.message.ephemeralMessage.message
        : m.message;
    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let calender = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const type = Object.keys(m.message)[0];
    kurr.sendMessage(
      m.key.remoteJid,
`┏◪ 「 Anti Delete 」
┃ •Nama : @${m.participant.split("@")[0]}
┃ •Waktu : ${jam} ${week} ${calender}
┃ •Type : ${type}
┗◪`,
      MessageType.text,
      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }
    );

    kurr.copyNForward(m.key.remoteJid, m.message);
  });

antical = true
kurr.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
kurr.sendMessage(call, `*Sorry ${kurr.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => kurr.blockUser(call, "add"))
})

}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log(chalk.bgHex('#FFDF00').underline(color('Module','black'), color(`'${module}'`, 'red'), color('is now being watched for changes', 'black')))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
