module.exports = ({
          name: "bilgi",
          code: `
          $onlyIf[$getUserVar[karaliste;$authorID]==evet;{newEmbed:{author:Hata!}{description:❌ **$username** Karalisteye Alındığın İçin, Komutları Kullanamazsın}{color:Red}}]
          $onlyIf[$getVar[bakım]==acık;{newEmbed:{author:Hata!}{description:❌ **$username** Bot Bakımda Olduğundan Dolayı Komutları Kullanamazsın}{color:Red}}]
          $author[1;$username[$authorID];$userAvatar]
          $description[
          <@$authorID> adlı üyenin sunucu içerisi detaylı istatistikleri;

          Kullanıcının Adı: <@$mentioned[1]>

          Kullanıcının ID'si: $mentioned[1]

          Kullanıcının İsim Etiketi: $userTag[$mentioned[1]]

          Kullanıcının Rozetleri: $userBadges[$mentioned[1];, ]
          ]
           
`
});