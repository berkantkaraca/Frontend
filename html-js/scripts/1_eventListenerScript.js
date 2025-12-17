//addeventListener: bir tage event davranışını js ile eklememizi sağlar. Avantajı henüz dom'da tanımlanmamış runtime'da dokümantasyona girecek taglerin davranışını belirlemektir. Normal bir fonksiyon çağrısıyla o davranış eklenemez

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     alert("butona tıklandı");
// });
//Uncaught TypeError: Cannot read properties of null (reading 'addEventListener') hatası verir çünkü js kodu çalıştığında btn id'li tag henüz DOM'da yoktur. Bu yüzden btn değişkeni null olur ve null'ın addEventListener'ını okuyamazsın hatası verir.

// btn => kimi dinliyorum
// click => neyi dinliyorum
// () => {alert("butona tıklandı");} => ne yapacağım

/*
    Çalışma sırası:
    HTML yüklenir
    DOM oluşur
    JS DOM'a dokunabilir

    Bu durumda ya scripti sayfanın en altına koyarız
    ya da DOMContentLoaded eventini dinleriz:
*/

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
        alert("butona tıklandı");
    });
});
