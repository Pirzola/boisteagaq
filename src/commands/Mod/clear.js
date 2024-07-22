module.exports = {
          name: "clear",
          aliases: "sil",  
          code: `
          $onlyIf[$getUserVar[karaliste;$authorID]==evet;{newEmbed:{author:Hata!}{description:❌ **$username** Karalisteye Alındığın İçin, Komutları Kullanamazsın}{color:Red}}{deleteIn:2}]
          $onlyIf[$getVar[bakım]==acık;{newEmbed:{author:Hata!}{description:❌ **$username** Bot Bakımda Olduğundan Dolayı Komutları Kullanamazsın}{color:Red}}{deleteIn:2}]
           $onlyIf[$isNumber[$message[1]]!=false;{newEmbed:{author:Hata!}{description:❌ **$username** Lütfen Bir Sayı Gir!}{color:Red}}{deleteIn:2}]
           $onlyIf[$message[1]<=180;{newEmbed:{author:Hata!}{description:❌ **$username** En Fazla 100 Mesaj Silebilirsin!}{color:Red}}{deleteIn:2}]
           $onlyIf[$message[1]>=1;{newEmbed:{author:Hata!}{description:❌ **$username** En Az 1 Mesaj Silebilirsin!}{color:Red}}{deleteIn:2}]
           $onlyIf[$message[1]!=;{newEmbed:{author:Hata!}{description:❌ **$username** Lütfen Bir Sayı Gir!}{color:Red}}{deleteIn:2}]
           $clear[$channelID;$message[1]]
           $author[1;$username;$userAvatar[$authorID]]
           $description[1;**$message[1]** Adet Mesaj Silindi!]
           $color[1;#fff490]
           $thumbnail[$guildIcon[$guildID]]
           $footer[1;$username Tarafından Kullanıldı!;$authorAvatar]
           $addTimestamp[1]
           $deleteIn[3s]
           $onlyPerms[managemessages;{newEmbed:{author:Hata!}{description:❌ **$username** Bu Komutu Kullanabilmek İçin **Mesajları Yönet** Yetkisine Sahip Olmalısın!}{color:Red}}{deleteIn:2}]
           $onlyClientPerms[managemessages;{newEmbed:{author:Hata!}{description:❌ **$username** Bu Komutu Kullanabilmek İçin **Mesajları Yönet** Yetkisine Sahip Olmalıyım!}{color:Red}}{deleteIn:2}]
           
          `
}