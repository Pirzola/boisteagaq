module.exports = ({
          name: "mute",
          code: `
         $onlyIf[$getUserVar[karaliste;$authorID]==evet;{newEmbed:{author:Hata!}{description:❌ **$username** Karalisteye Alındığın İçin, Komutları Kullanamazsın}{color:Red}}]
          $onlyIf[$getVar[bakım]==acık;{newEmbed:{author:Hata!}{description:❌ **$username** Bot Bakımda Olduğundan Dolayı Komutları Kullanamazsın}{color:Red}}]
          <@$mentioned[1]> Adlı Kullanıcıya Mute Atıldı!
          $muteUser[$guildID;$mentioned[1];true]
          $onlyPerms[administrator;<a:Kirmizi:1149610435713175654> Bu Komutu Sadece **YÖNETİCİLER** Kullanabilir.]
          $onlyIf[$mentioned[1]!=;<a:Kirmizi:1149610435713175654> M!mute @etiket]
          $onlyClientPerms[administrator;<a:Kirmizi:1149610435713175654> Bunu Kullanmam İçin Yönetici Yetkisine Olmam Lazım]
          `
});