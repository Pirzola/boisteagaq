module.exports = [{
  name: "lock",
  $if: "old",
  code: `
$if[$hasPermsInChannel[$channelID;$guildID;sendmessages]==true]
$onlyIf[$getUserVar[karaliste;$authorID]==evet;{newEmbed:{author:Hata!}{description:❌ **$username** Karalisteye Alındığın İçin, Komutları Kullanamazsın}{color:Red}}]
$onlyIf[$getVar[bakım]==acık;{newEmbed:{author:Hata!}{description:❌ **$username** Bot Bakımda Olduğundan Dolayı Komutları Kullanamazsın}{color:Red}}]
$modifyChannelPerms[$channelID;$guildID;-sendmessages]
$title[1;Kanal Kilitlendi!]
$description[1;Kanal başarıyla kilitlendi.]
$color[1;Red]
$addButton[1;Kanalı Aç;secondary;unlock;no;🔓]
$onlyPerms[managechannels;{newEmbed:{author:Hata!}{description:❌ **$username** Bu Komutu Kullanabilmek İçin **Kanalları Yönet** Yetkisine Sahip Olman Gerekiyor!}{color:Red}}{deleteIn:2s}{ephemeral}]
$onlyClientPerms[managechannels;{newEmbed:{author:Hata!}{description:❌ **$username* Bu Komutu Kullanabilmek İçin **Kanalları Yönet** Yetkisine Sahip Olman Gerekiyor!}{color:Red}}{deleteIn:2s}{ephemeral}]
$endif
$if[$hasPermsInChannel[$channelID;$guildID;sendmessages]==false]
$onlyIf[$getUserVar[karaliste;$authorID]==evet;{newEmbed:{author:Hata!}{description:❌ **$username** Karalisteye Alındığın İçin, Komutları Kullanamazsın}{color:Red}}{ephemeral}]
$onlyIf[$getVar[bakım]==acık;{newEmbed:{author:Hata!}{description:❌ **$username** Bot Bakımda Olduğundan Dolayı Komutları Kullanamazsın}{color:Red}}{ephemeral}]
$modifyChannelPerms[$channelID;$guildID;+sendmessages]
$title[1;Kanal Kilidi Açıldı!]
$description[1;Kanalın kilidi başarıyla açıldı.]
$color[1;Green]
$addButton[1;Kanalı Kapat;secondary;lock;no;🔒]
$onlyPerms[managechannels;{newEmbed:{author:Hata!}{description:❌ **$username* Bu Komutu Kullanabilmek İçin **Kanalları Yönet** Yetkisine Sahip Olman Gerekiyor!}{color:Red}}{deleteIn:2s}{ephemeral}]
$onlyClientPerms[managechannels;{newEmbed:{author:Hata!}{description:❌ **$username* Bu Komutu Kullanabilmek İçin **Kanalları Yönet**
Yetkisine Sahip Olman Gerekiyor!}{color:Red}}{deleteIn:2s}{ephemeral}]
$endif
  `
},{
  name: "lock",
  type: "interaction",
  prototype: "button",
  code: `
$modifyChannelPerms[$channelID;$guildID;-sendmessages]
$interactionReply[;{newEmbed:{title:Kanal Kilitlendi!}{description:Kanalın kilidi başarıyla Kilitlendi}{color:Red}};{actionRow:{button:Kanalı Aç:danger:unlock:false:🔓}};;everyone;true]
$onlyPerms[managechannels;{newEmbed:{author:Hata!}{description:❌ **$username* Bu Komutu Kullanabilmek İçin **Kanalları Yönet** Yetkisine Sahip Olman Gerekiyor!}{color:Red}}{deleteIn:2s}{ephemeral}]
$onlyClientPerms[managechannels;{newEmbed:{author:Hata!}{description:❌ **$username** Bu Komutu Kullanabilmek İçin **Kanalları Yönet** Yetkisine Sahip __Olmam__ Gerekiyor!}{color:Red}}{deleteIn:2s}{ephemeral}]
  `
},{
  name: "unlock",
  type: "interaction",
  prototype: "button",
  code: `
$modifyChannelPerms[$channelID;$guildID;+sendmessages]
$interactionReply[;{newEmbed:{title:Kanal Kilidi Açıldı!}{description:Kanalın kilidi başarıyla açıldı.}{color:Green}};{actionRow:{button:Kanalı Kapat:danger:lock:false:🔒}};;everyone;true]
$onlyPerms[managechannels;{newEmbed:{author:Hata!}{description:❌ **$username** Bu Komutu Kullanabilmek İçin **Kanalları Yönet** Yetkisine Sahip Olman Gerekiyor!}{color:Red}}{deleteIn:2s}{ephemeral}]
$onlyClientPerms[managechannels;{newEmbed:{author:Hata!}{description:❌ **$username** Bu Komutu Kullanabilmek İçin **Kanalları Yönet** Yetkisine Sahip Olman Gerekiyor!}{color:Red}}{deleteIn:2s}{ephemeral}]
  `
}   
                 ]