module.exports = [{
          name: "ceza",
          code: `
          $onlyIf[$getUserVar[karaliste;$authorID]==evet;{newEmbed:{author:Hata!}{description:❌ **$username** Karalisteye Alındığın İçin, Komutları Kullanamazsın}{color:Red}}]
          $onlyIf[$getVar[bakım]==acık;{newEmbed:{author:Hata!}{description:❌ **$username** Bot Bakımda Olduğundan Dolayı Komutları Kullanamazsın}{color:Red}}]
          <@$mentioned[1]> Adlı Kullanıcıya $message Sebebiyle Ceza Verildi.
          $setUserVar[ceza;$noMentionMessage[1]]
          $onlyPerms[administrator;<a:Kirmizi:1149610435713175654> Bu Komutu Sadece **YÖNETİCİLER** Kullanabilir.]
          $onlyIf[$mentioned[1]!=;M!ceza @etiket Sebep]`
},{
          name: "ceza-liste",
          code: `
           $onlyIf[$getUserVar[karaliste;$authorID]==evet;{newEmbed:{author:Hata!}{description:❌ **$username** Karalisteye Alındığın İçin, Komutları Kullanamazsın}{color:Red}}]
          $onlyIf[$getVar[bakım]==acık;{newEmbed:{author:Hata!}{description:❌ **$username** Bot Bakımda Olduğundan Dolayı Komutları Kullanamazsın}{color:Red}}]
          __$username[$mentioned[1]] Adlı Kullanıcının Cezalar__
          
          __$getUserVar[ceza]__
          $onlyPerms[administrator;<a:Kirmizi:1149610435713175654> Bu Komutu Sadece **YÖNETİCİLER** Kullanabilir.]
          $onlyIf[$mentioned[1]!=;M!ceza-liste @etiket]`
}];
