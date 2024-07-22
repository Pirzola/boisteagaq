module.exports = {
    name:"unban",
    code:`
     $onlyIf[$getUserVar[karaliste;$authorID]==evet;{newEmbed:{author:Hata!}{description:❌ **$username** Karalisteye Alındığın İçin, Komutları Kullanamazsın}{color:Red}}]
 $onlyIf[$getVar[bakım]==acık;{newEmbed:{author:Hata!}{description:❌ **$username** Bot Bakımda Olduğundan Dolayı Komutları Kullanamazsın}{color:Red}}]
    $unban[$guildID;$message[1];$noMentionMessage]
    Kaldıran: [$userTag[$authorID]](https://discord.com/users/$authorID), Kaldırılan [$userTag[$noMentionMessage]](https://discord.com/users/$noMentionMessage)
    $onlyClientPerms[banmembers;<a:Kirmizi:1149610435713175654> Üyeleri Engelle Yetkim Bulunmuyor :(]
    $onlyIf[$noMentionMessage!=;<a:Kirmizi:1149610435713175654> Bir ID Belirt!]
    $onlyPerms[banmembers<a:Kirmizi:1149610435713175654> ;Üyeleri Yasakla Yetkin Yok!]
$reply
    $suppressErrors
      `}