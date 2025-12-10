//Js'te fonksiyonlar bir value olarak görünür
//Dolayısıyla siz dilerseniz fonksiyonları bir değişkene atayabilir veya başka fonksiyona argüman olarak verilebilir

//Parametre: Metot/Fonsksiyon yaratılırken onun çağrılışı için dışarıdan bir bilgi alacağını bildiren yapıdır
//Argüman: Metot/Fonsksiyon çağrılırken dışarıdan verilen gerçek bilgi

//Function Declaration (Fonksiyon Bildirimi)

//Parametre alan bir fonksiyon
function greet(name) { 
    console.log("Merhaba ", name);
}
greet("Ahmet"); //Argüman

//Değer döndüren fonksiyon
function square(x) {
    return x * x;
}
let result = square(5); // resulta dönen dğer atanır
console.log("5'in karesi: ", result);
console.log("2'nin karesi: ", square(2)); 

//boolean döndüren fonksiyon
function isPass(not) {
    return not >= 50;
}
console.log(isPass(30));
console.log(isPass(70));

//returnden sonra değer geldiği anda artık siz fonksiyondan dönen o değeri başka değişkenlere veya başka fonksiyonlara argüman olarak verebilirsiniz

//Varsayılan parametreler
console.log("\n==== Varsayılan Parametreler ====");
function welcome(name = "Misafir") { //name parametresine varsayılan değer atandı
    console.log("Hoşgeldiniz ", name);
}
welcome(); //Hoşgeldiniz Misafir
welcome("Ayşe"); //Hoşgeldiniz Ayşe

//Vergi hesaplama
function calculateTax(amount, rate = 0.40) {
    return amount * rate;
}
console.log("Vergi : ", calculateTax(1000));

//Anonymous Function ve Expressions
//c#'da declaration normal metotla olur, expression ise değer atanmış anonymous/normal metotlarla (delegate, lambda expression) olur

//1) İsimsiz function bir değişken atama:
//Fonksiyonu bir değişkene atanırken standart olarak const olarak tanımlanması gerekir
const sayHi = function(name) {
    console.log("Hi ", name);
}

sayHi("John");

//toplama fonksiyonu expression
const add = function(a, b) {
    return a + b;
}

/**
 * Functionu parametre olarak başka bir funcsiyona parametre olarak geçirebilirsiniz
 * değişken üzerinde davranış değiştirmek istediğimizde kullanılır
 */

//F) Arrow Function - Modern JS
//Daha kısa ve okunabilir fonksiyon tanımlama şeklidir
console.log("\n==== Arrow Function ====");
/**
 * Arow function, function expression'ın kısaltılmış halidir
 * const add = function(a,b) { return a + b; } => expression
 * const add = (a,b) => { return a + b; } => arrow function
 * 
 * Eğer fonksiyon tek bir ifade döndürüyor ise süslü parantezler ve return ifadesi de kaldırılabilir
 * const add = (a,b) => a + b;
 * 
 * parametre yoksa ise parantezler boş bırakılır
 * const greet = () => console.log("Hello");
 * 
 * parantezin opsiyonel olmasım sadece ve sadece tek bir parametre varsa geçerlidir
 * const square = x => x * x;
 */
const multiply = (a, b) => a * b;
console.log("3*4 = ", multiply(3, 4));

const hello = () => "Hello!";
console.log(hello());

const double = x => x * 2; //tek parametre olduğu için parantez yok
console.log("5'in iki katı: ", double(5));

//Callback fonksiyonlarda kodu kısaltmak için kullanılır. Angular componentlerinde gözlemlenir.

//Parametre olarak fonksiyon kullanımı

/**
 * Fonksiyonlar Js'de First-class Citizen olarak görülür
 * 
 * -Değişkene atanabilirler
 * -Parametre olarak verilebilirler
 */

//İşlem uygula fonksiyonu
function applyOperation(a, b, operation) {
    //opeation: function(a,b) => number gibi bir fonksiyon bekleniyor
    const result = operation(a, b); //verilen fonksiyon çağrılır
    console.log("İşlem sonucu: ", result);
    return result;
}

//Toplama operasyonu
const oppAdd = (x, y) => x + y;

//Çıkarma operasyonu
const oppSubtract = (x, y) => x - y;

//Çarpma operasyonu
const oppMultiply = (x, y) => x * y;

//Bolme operasyonu
const oppDivide = (x, y) => x / y;


applyOperation(10, 5, (x, y) => x - y); //5, Inline arrow function ile 
applyOperation(10, 5, oppSubtract); //5, önceden tanımlanmış fonksiyon ile

applyOperation(3,4, oppMultiply); //12


//Global Local sistemi
console.log("\n==== Global ve Local Değişkenler ====");

let globalCounter = 0; //global değişken

function incrementCounter() {
    globalCounter++;
    console.log("Global counter: ", globalCounter);

    let localCounter = 10; //local değişken
    console.log("Local counter: ", localCounter);
}

//Closure
function createCounter() {
    let count = 0; //bu scopa ait bir değişken

    function increment() {
        count++;
        console.log("Count: ", count);
    }

    return increment; //iç fonksiyonu döndürür
}

const counter1 = createCounter(); // counter1 artık increment fonksiyonunu tutuyor
counter1();
counter1();
counter1();

//Burada createcounter görebini yaptı birdaha çağrıldığında niye yeni bir count oluşmuyor?
//Cevap: Closure
//hafızasında atandığı andaki scopu hep hatırlar
//Function tanımlandığı scopu hafızasında tutar, ve closure demek bu hafızanın o cercevede(function değer olarak atandığında) kalıcı hale gelir

function logIfPositive(n) {
    if (n > 0) {
        console.log(n, "pozitif bir sayıdır.");
        return true;
    }
    return "Pozitif değildir.";
}

logIfPositive(10);
console.log(logIfPositive(-5));

//Filter Array
function filterArray(arr, predicate) {
    const result = [];
    for (const item of arr) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}

const numbers2  = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = filterArray(numbers2, n => n % 2 === 0);
console.log("Çift sayılar: ", evenNumbers);

// return yoksa undefined döner
const logSum = (a, b) => {
    const sum = a + b;
    console.log("Toplam: ", sum);
} 

const returned = logSum(3,4);
console.log("Returned: ", returned); //undefined
logSum(5,6); // bu şelilde kullanılmalı
