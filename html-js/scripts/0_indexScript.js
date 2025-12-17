function sum(a, b) {
    const total = a + b;

    if (total > 100) {
        throw new Error("Toplam 100'den büyük olamaz.");
    }

    return total;
}

function power(base, exponent) {
    if (exponent < 0) {
        throw new Error("Üs negatif olamaz.");
    }

    return base ** exponent;
}

//Main fonksiyonumuz
function run() {
    //ilgili input içindeki değerleri alır
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);

    const process = document.getElementById("process").value;
    const output = document.getElementById("output"); //ilgili elementi seçer

    /*
        document.getElementsByName(div) =>  Belirtilen isimdeki tüm elementleri seçer ve bir NodeList döner.
        document.getElementsByClassName(div) => Belirtilen sınıftaki tüm elementleri seçer ve bir HTMLCollection döner.
        document.getElementById(div) => Belirtilen id'ye sahip tek bir elementi seçer ve bir HTMLElement döner.
    */

    try {
        let result;
        if (process === "sum") {
            result = sum(n1, n2);
        } else if (process === "power") {
            result = power(n1, n2);
        } else {
            throw new Error("Geçersiz işlem seçildi.");
        }
        output.innerText = "Sonuç: " + result;
        output.style.color = "green"; //Başarılı işlemde yazı rengini yeşil yap
    } catch (error) {
        output.innerText = "Hata: " + error.message;
        output.style.color = "red"; //Hata durumunda yazı rengini kırmızı yap
    }
}
