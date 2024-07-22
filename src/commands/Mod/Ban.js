module.exports = ({
    name: "ban",
    code: `
    $onlyIf[$getUserVar[karaliste;$authorID]==evet;{newEmbed:{author:Hata!}{description:❌ **$username** Karalisteye Alındığın İçin, Komutları Kullanamazsın}{color:Red}}]
          $onlyIf[$getVar[bakım]==acık;{newEmbed:{author:Hata!}{description:❌ **$username** Bot Bakımda Olduğundan Dolayı Komutları Kullanamazsın}{color:Red}}]
     $description[<@$mentioned[1]> Adlı Kullanıcı $noMentionMessage[1] Sebebiyle Banlandı!]
     $color[#ffffff]
          $ban[$guildID;$mentioned[1];0;$noMentionMessage[1]]
          $onlyPerms[banmembers;<a:Kirmizi:1149610435713175654> Bu Komutu Sadece **Üyeleri Engelle** Yetkisine Sahipler Kullanabilir :)]
          $onlyClientPerms[banmembers;<a:Kirmizi:1149610435713175654> Üyeleri Yasakla Yetkim Bulunmuyor :(]
          $onlyIf[$message!=;<a:Kirmizi:1149610435713175654> M!ban @etiket sebep]
          $suppressErrors
`});