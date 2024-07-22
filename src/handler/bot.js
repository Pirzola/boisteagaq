module.exports = {
    "token": process.env.token, //bot tokeni 
    "prefix": ["M!", "m!"], //bot prefixi
    "intents": ["MessageContent", "GuildMessages", "Guilds", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping"],// botun intentleri
    "events": ["onMessage", "onInteractionCreate",], //botun eventleri
    "mongo": process.env.mongodb, //mongo db url
    "ses": "1167134018983174154" //botun gireceği ses kanalı idsi
}