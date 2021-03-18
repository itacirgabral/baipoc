const fs = require('fs')
const { WAConnection, Mimetype, MessageType } = require('@adiwajshing/baileys')

global.petzap = process.env.PETZAP
global.Mimetype = Mimetype
global.MessageType = MessageType
global.docpdf = fs.readFileSync("doc.pdf")
global.imagejpg = fs.readFileSync("image.jpg")
global.audioogg = fs.readFileSync("audio.ogg")

;(async () => {
  const conn = new WAConnection()
  conn.browserDescription = ['baipoc', 'Chrome', '87.0.4280.141']

  // conn.loadAuthInfo('./auth_info.json')

  conn.on ('credentials-updated', () => {
    console.log (`credentials updated!`)
    fs.writeFileSync('./auth_info.json', JSON.stringify(conn.base64EncodedAuthInfo(), null, 2))
  })


  await conn.connect()

  global.conn = conn

  // conn.sendMessage(petzap, docpdf, MessageType.document, { mimetype: Mimetype.pdf, filename: 'árvoreDeGanchos2.pdf'})
  // conn.sendMessage(petzap, imagejpg, MessageType.image, { mimetype: Mimetype.jpeg, caption: `The fifo's drummer` })
  // conn.sendMessage(petzap, audioogg, MessageType.audio, { mimetype: Mimetype.ogg })

  // conn.close()
})()

// const { conn, Mimetype, MessageType, petzap, docpdf, imagejpg, audioogg } = global
