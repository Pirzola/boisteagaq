module.exports = {
          name: "slowmode",
          aliases: ["yavaşmod","yavasmod", "yavaş-mod","yavas-mod","slow-mode"],
          code: `
          $onlyIf[$getUserVar[karaliste;$authorID]==evet;{newEmbed:{author:Hata!}{description:❌ **$username** Karalisteye Alındığın İçin, Komutları Kullanamazsın}{color:Red}}]
          $onlyIf[$getVar[bakım]==acık;{newEmbed:{author:Hata!}{description:❌ **$username** Bot Bakımda Olduğundan Dolayı Komutları Kullanamazsın}{color:Red}}]
          $slowmode[$message[1]s;$channelID;]
          $author[1;Yavaş Mod Ayarlandı;$userAvatar[$clientID]]
          $description[1;Yavaş Mod Başarıyla Ayarlandı!]
          $color[1;Green]
          $footer[1;$username Tarafından Ayarlandı!;$authorAvatar]
          $addTimestamp[1]
          $onlyIf[$message[1]!=;{newEmbed:{author:Hata!}{description:❌ **$username** Bir Süre Belirt! M!slowmode <Süre>}{color:Red}}]
          $onlyIf[$isNumber[$message[1]]!=false;{newEmbed:{author:Hata!}{description:❌ **$username** Bir Süre Belirt! M!slowmode <Süre>}{color:Red}}]
          $onlyIf[$message[1]<=21600;{newEmbed:{author:Hata!}{description:❌ **$username** Süre En Fazla **6** Saat Olabilir!}{color:Red}}]
          $onlyIf[$message[1]>=0;{newEmbed:{author:Hata!}{description:❌ **$username** Süre En Az **0** Saniye Olabilir!}{color:Red}}]
          $onlyPerms[managemessages;{newEmbed:{author:Hata!}{description:❌ **$username** Bu Komutu Kullanabilmek İçin **Mesajları Yönet** Yetkisine Sahip Olman Gerekiyor!}{color:Red}}]
          $onlyClientPerms[managemessages;{newEmbed:{author:Hata!}{description:❌ **$username** Bu Komutu Kullanabilmek İçin **Mesajları Yönet** Yetkisine Sahip Olman Gerekiyor!}{color:Red}}]
          `
}