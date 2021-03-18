const fs = require('fs')
const { WAConnection } = require('@adiwajshing/baileys')

;(async () => {
  const conn = new WAConnection()
  conn.browserDescription = ['baipoc', 'Chrome', '87.0.4280.141']
  conn.on ('credentials-updated', () => {
    console.log (`credentials updated!`)
    fs.writeFileSync('./auth_info.json', JSON.stringify(conn.base64EncodedAuthInfo(), null, 2))
  })

  await conn.connect()
})()