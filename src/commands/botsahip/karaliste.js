module.exports = {
  name: "karaliste",
  $if: "old",
  aliases: ["blacklist", "bl", "karalıste"],
  code: `
$if[$getUserVar[karaliste;$mentioned[1]]!=evet]
$channelSendMessage[1164530230959018034;{newEmbed:{author:Karalisteden Çıkartıldı!}{description:$username Adlı Kişi, $username[$mentioned[1]] Adlı Kişiyi Karalisteden Çıkardı!}{thumbnail:$userAvatar[$mentioned[1]]}{footer:Komutu Kullanan Kişi $username}{timestamp}{color:Red}};false]
  $onlyIf[$isMentioned[$mentioned[1]]!=false;{newEmbed:{author:Hata!}{description:❌ **$username** Birini Etiketle}{color:Red}}]
  $onlyIf[$message[1]!=;{newEmbed:{author:Hata!}{description:❌ **$username** Birini Etiketle}{color:Red}}]
  $onlyForIDs[911567869119193139;{newEmbed:{author:Hata!}{description:❌ **$username** Bu Komutu Sadece Sahibim Kullanabilir!}{reactions:<:no:1232424174383796377>}{deleteIn:4}{color:Red}}]
  $setUserVar[karaliste;evet;$mentioned[1]]
  $title[Kara Listeden Çıkartıldı!]
  $description[$username Adlı Kişi, $username[$mentioned[1]] Adlı Kişiyi Karalisteden Çıkardı!]
  $color[Red]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $footer[Komutu Kullanan Kişi $username;$authorAvatar]
  $addTimestamp

   $endif
   
  $if[$getUserVar[karaliste;$mentioned[1]]!=hayır]
$channelSendMessage[1164530230959018034;{newEmbed:{author:Karalisteye Eklendi!}{description:$username Adlı Kişi, $username[$mentioned[1]] Adlı Kişiyi Karalisteye Ekledi!}{thumbnail:$userAvatar[$mentioned[1]]}{footer:Komutu Kullanan Kişi $username}{timestamp}{color:Red}};false]
  $onlyIf[$isMentioned[$mentioned[1]]!=false;{newEmbed:{author:Hata!}{description:❌ **$username** Birini Etiketle}{color:Red}}{ephemeral}]
  $onlyIf[$message[1]!=;{newEmbed:{author:Hata!}{description:❌ **$username** Birini Etiketle}{color:Red}}{ephemeral}]
  $onlyForIDs[911567869119193139;{newEmbed:{author:Hata!}{description:❌ **$username** Bu Komutu Sadece Sahibim Kullanabilir!}{reactions:<:no:1232424174383796377>}{deleteIn:4}{color:Red}}{ephemeral}]
  $setUserVar[karaliste;hayır;$mentioned[1]]
  $title[Kara Listeye Eklendi]
  $description[$username Adlı Kişi, $username[$mentioned[1]] Adlı Kişiyi Karalisteye Ekledi!]
  $color[Green]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $footer[Komutu Kullanan Kişi $username;$authorAvatar]
  $addTimestamp
  $endif
  `
}
