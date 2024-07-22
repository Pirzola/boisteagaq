module.exports = ({
          name: "say",
          code: `
           $onlyIf[$getUserVar[karaliste;$authorID]==evet;{newEmbed:{author:Hata!}{description:❌ **$username** Karalisteye Alındığın İçin, Komutları Kullanamazsın}{color:Red}}]
          $onlyIf[$getVar[bakım]==acık;{newEmbed:{author:Hata!}{description:❌ **$username** Bot Bakımda Olduğundan Dolayı Komutları Kullanamazsın}{color:Red}}]
          $author[1;$guildName[$guildID];$guildIcon[$guildID]]
          $description[
          $usersCount[$guildID;all;true] Kişi!
          
          $roleCount[$guildID;all;true] Rol!
          
          $emojiCount[$guildID;all;true] Emoji!
          
          $channelCount[$guildID;all;true] Kanal!
          ]
          `
});