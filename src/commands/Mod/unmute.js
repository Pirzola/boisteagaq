module.exports = ({
          name: "unmute",
          code: `
           $onlyIf[$getUserVar[karaliste;$authorID]==evet;{newEmbed:{author:Hata!}{description:❌ **$username** Karalisteye Alındığın İçin, Komutları Kullanamazsın}{color:Red}}]
 $onlyIf[$getVar[bakım]==acık;{newEmbed:{author:Hata!}{description:❌ **$username** Bot Bakımda Olduğundan Dolayı Komutları Kullanamazsın}{color:RED}}]
          <@$mentioned[1]> Adlı Kullanıcıdan Mute Kaldırıldı!
          $muteUser[$guildID;$mentioned[1];false]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİLER** Kullanabilir.]
          $onlyIf[$mentioned[1]!=;M!unmute @etiket]
          $onlyClientPerms[administrator;<a:Kirmizi:1149610435713175654> Bunu Kullanmam İçin Yönetici Yetkisine Olmam Lazım]
          `
});