module.exports = [{
  name: "döviz",
  code: `
  $onlyIf[$getUserVar[karaliste;$authorID]==evet;{newEmbed:{author:Hata!}{description:❌ **$username** Karalisteye Alındığın İçin, Komutları Kullanamazsın}{color:Red}}]
          $onlyIf[$getVar[bakım]==acık;{newEmbed:{author:Hata!}{description:❌ **$username** Bot Bakımda Olduğundan Dolayı Komutları Kullanamazsın}{color:Red}}]
$addField[1;Euro - :flag_gb:;
Alış : \`$get[euroAlış]\`
Satış : \`$get[euroSatış]\`;]
$addField[1;Dolar - :flag_us:;
Alış : \`$get[dolarAlış]\`
Satış : \`$get[dolarSatış]\`;]
$color[9269ff]
$addTimestamp[1]

$let[dolarAlış;$jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;USD.alis;Sonuç Bulunamadı!]TL]
$let[dolarSatış;$jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;USD.satis;Sonuç Bulunamadı!]TL]
$let[euroAlış;$jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;EUR.alis;Sonuç Bulunamadı!]TL]
$let[euroSatış;$jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;EUR.satis;Sonuç Bulunamadı!]TL]
`
}]