module.exports = [{
          name: "avatar",
          code: `
          $onlyIf[$getUserVar[karaliste;$authorID]==evet;{newEmbed:{author:Hata!}{description:❌ **$username** Karalisteye Alındığın İçin, Komutları Kullanamazsın}{color:Red}}]
          $onlyIf[$getVar[bakım]==acık;{newEmbed:{author:Hata!}{description:❌ **$username** Bot Bakımda Olduğundan Dolayı Komutları Kullanamazsın}{color:Red}}]
  $title[Avatarını Görmek İçin Tıkla]
  $addButton[1;Avatar;success;avt;false]`
},{
  name: "avt",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionReply[;{newEmbed:{image:$userAvatar[$authorID]}};;;everyone;true]`
}];