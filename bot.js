//moduller
const { LoadCommands, AoiClient } = require("aoi.js")
const { ApplicationCommandManager } = require("aoi-command-manager")
const eren = require("./src/handler/bot.js")
const Eris = require('eris')
const { Util } = require("aoi.js")
const { setup } = require("@akarui/aoi.parser")
const { join } = require("path")
const { Database } = require("aoi.mongo");
setup(Util)

//ayarlar
const client = new AoiClient({
    token: eren.token,
    prefix: eren.prefix,
    intents: eren.intents, 
    events: eren.events,
//  disableAoiDB: true,
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        path: "./database/",
    }
})

//handler
client.variables(require("./src/handler/ayarlar.js"))

//komut handler
const loader = new LoadCommands(client)
loader.load(client.cmd,"./src/commands/")

//status
client.status({name: "Developed by ernbey", status: "dnd", type: "CUSTOM", time: 12})

//eris ses
const _client = new Eris(eren.token, {
    intents: ["all"]
})

_client.connect();
_client.on("ready", () => {
_client.joinVoiceChannel(eren.ses, {selfMute: false, selfDeaf: true})
_client.editStatus("dnd")
})

client.readyCommand({
    channel: '1167316639780458547', // Mesajı göndermek istediğiniz kanalın ID'sini girin
    code: `$channelSendMessage[$channelID;$randomText[Sizin İçin Geldim Değerimi Bilin Haaa Başlama Sürem $random[1;4] Dakika $random[1;60] Saniye;Hadi Yine İyisiniz Gene Geldim Başlama Sürem $random[1;4] Dakika $random[1;60] Saniye;Off Kıyamadım Gene Geldim Başlama Sürem $random[1;4] Dakika $random[1;60] Saniye]]` // Bot aktif olduğunda gönderilecek mesaj
});