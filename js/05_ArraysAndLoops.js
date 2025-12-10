console.log("Temel Array kullanımı")

let numbers = [10, 20, 30, 40, 50];
console.log(numbers);
console.log(numbers.length);

//Index her zaman 0'dan baslar..
console.log("İlk eleman :", numbers[0]); //10
console.log("Son eleman : ", numbers[numbers.length - 1]); //50

//Index dısı erişim => undefined döner(Exception beklemeyin)
console.log("Index 100 : ", numbers[1000]) //cıktı undefined 

let list = [1, 2, 3];
console.log("Baslangıc : ", list);

//push koleksiyona bir eleman ekler
list.push(4);
console.log("Son hali : ", list);

//pop fonksiyonu sondaki eleman siler ver geri döndürür
let removed = list.pop();
console.log("pop() ile silinen ", removed);

//unshift => Basa eleman eleman ekler
list.unshift(0);
console.log("unshift sonrası : ", list);

//shift bastaki elemanı siler ve geri döndürür
let removedFirst = list.shift();
console.log("shift() ile silinen ", removedFirst);

//----------------------------------------
// splice - İceriden parca alma ve cıkarma
//----------------------------------------
console.log("\n==== splice / slice ====");

let items = ["a", "b", "c", "d", "e"];
console.log("Baslangıc : ", items);

//slice(beging,end) => belirli aralıgı kopyalar , orijinali bozmaz
let sub1 = items.slice(1, 4) // index 1,2,3 => "b","c","d"
console.log(sub1);

//splice(start,deleteCount,...eklenecekler) => orijinali degiştirir
let removedItems = items.splice(2, 2); //index 2'den 2 eleman sil
console.log(removedItems);
console.log(items);

//--------
//Döngüler
//--------
console.log("\n==== Döngüler ====");

let nums = [5, 10, 15, 20];

//1) klasik for döngüsü
console.log("1) klasik for döngüsü");
for (let i = 0; i < nums.length; i++) {
    console.log(`Index ${i} : ${nums[i]}`);
}

//2) for-of döngüsü (modern, okunabilir)
console.log("2) for-of döngüsü");
for(const n of nums) {
    console.log("Deger: ", n);
}

//3)while döngüsü
console.log("3) while döngüsü");
let index = 0;
while(index < nums.length) {
    console.log(`Index ${index} : ${nums[index]}`);
    index++;
}

//Array üzerinde dolaşırken for-of her zaman daha okunabilirdir
//Ancak index'e ihtiyacınız varsa klasik for veya while kullanabilirsiniz

//Toplam, ortalama, min, max hesaplama
function seperator(konu) {
    console.log("\n==== " + konu + " ====");
}
seperator("Toplam/Ortalama/Min/Max Hesaplama");

let grades = [90,70,50,10,85];
let total = 0;
let min = grades[0];
let max = grades[0];

for(const grade of grades) {
    total += grade;

    if(grade < min) {
        min = grade;
    }

    if(grade > max) {
        max = grade;
    }
}

let avg = total / grades.length;

console.log("Notlar: ", grades);
console.log("Toplam: ", total);
console.log("Ortalama: ", avg);
console.log("Min: ", min);
console.log("Max: ", max);

//------------------------
//Koşullu ve kararlı block
//------------------------
let passCount = 0;
let failCount = 0;

//grade.Count(g=> g >= 50) => C# Linq benzeri
for(const grade of grades) {
    if(grade >= 50) {
        passCount++;
    } 
    else {
        failCount++;
    }
}

console.log("Geçen sayısı: ", passCount);
console.log("Kalan sayısı: ", failCount);

//Ürün fiyatlarına %10 indirim uygulayyıp yeni bir array oluşturalım
seperator("Ürün fiyatlarına indirim uygulama");
let productPrices = [100, 200, 300];
let discountedPrices = []; //yeni array

for(const price of productPrices) {
    let discounted = price * 0.9; // %10 indirim
    discountedPrices.push(discounted);
}
console.log("Orjinal fiyatlar: ", productPrices);
console.log("İndirimli fiyatlar: ", discountedPrices);

//grades dizisindeki 80 üzeri notları alıp yeni bir array oluşturalım
seperator("80 üzeri notları alma");
let highGrades = [];
for(grade of grades){
    if(grade >= 80)
        highGrades.push(grade);
}
console.log("80 ve üzeri notlar: ", highGrades);

seperator("Ogrenciler Listesi")
let students = [
    {id:1, name: "Ali", score: 40},
    {id: 2, name: "Yusuf", score: 90},
    {id: 3, name: "Sevval", score: 90},
    {id: 4, name: "Feyyaz", score: 100},
    {id: 5, name: "Serra", score: 100},
    {id: 6, name: "Fatih", score: 30}
];

console.log("Öğrenciler: ", students);

for(const student of students) {
    console.log(`Id: ${student.id}, İsim: ${student.name}, Not: ${student.score}`);
}

//Geçen öğrencileri yazdırma
seperator("Geçen Öğrenciler");
for(const student of students) {
    if(student.score >= 50) {
        console.log(`Id: ${student.id}, İsim: ${student.name}, Not: ${student.score}`);
    }
}
