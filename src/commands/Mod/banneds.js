module.exports = ({
          name: "banlananlar",
          code: `
          $onlyIf[$getUserVar[karaliste;$authorID]==evet;{newEmbed:{author:Hata!}{description:❌ **$username** Karalisteye Alındığın İçin, Komutları Kullanamazsın}{color:Red}}]
          $onlyIf[$getVar[bakım]==acık;{newEmbed:{author:Hata!}{description:❌ **$username** Bot Bakımda Olduğundan Dolayı Komutları Kullanamazsın}{color:Red}}]
          $author[1;$guildName[$guildID];$guildIcon[$guildID]]
          $description[
          $usersBanned[$guildID;false;mention;, ]]
          $color[#fff490]
          $thumbnail[$guildIcon[$guildID]]
          
          `
});