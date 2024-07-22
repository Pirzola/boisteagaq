module.exports = {
  name: "bakım",
  $if: "old",
  aliases: "bakim",
  code: `  
  $if[$getVar[bakım]!=kapalı]
$onlyForIDs[911567869119193139;{newEmbed:{author:Hata!}{description:❌ **$username** Bu Komutu Sadece Sahibim Kullanabilir!}{reactions:<:no:1232424174383796377>}{color:Red}}{deleteIn:4}]
  $setVar[bakım;kapalı]
  $author[1;Bakım Modu;$userAvatar[$clientID]]
  $description[1;Bakım Modu Başarıyla Açıldı!]
  $color[1;Green]
  $footer[1;$username Tarafından Açıldı!;$authorAvatar]
  $addTimestamp[1]
  $endif
  $if[$getVar[bakım]!=acık]
$onlyForIDs[911567869119193139;{newEmbed:{author:Hata!}{description:❌ **$username** Bu Komutu Sadece Sahibim Kullanabilir!}{reactions:<:no:1232424174383796377>}{color:Red}}{deleteIn:4}]
$setVar[bakım;acık]
  $author[1;Bakım Modu;$userAvatar[$clientID]]
  $description[1;Bakım Modu Başarıyla Kapatıldı!]
  $color[1;Green]
  $footer[1;$username Tarafından Açıldı!;$authorAvatar]
  $addTimestamp[1]
  $endif
  `
}