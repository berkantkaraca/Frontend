/**
 * protype based OOP
 * class based OOP
 * 
 * OOP: Object Oriented Programming
 */

//Objexct Literal (En temel class görünümü)
console.log("==== Object Literal ====");

const user1 = {
    //Field / Property (instance member)
    id: 1,
    name: "Ali",
    email: "example@gmail.com",

    //Method (instance member)
    describe: function () {
        console.log(`${this.id} => Name: ${this.name}, Email: ${this.email}`);
    },

    //kısa metot syntax'ı
    rename(newName) {
        this.name = newName;
    }
};

user1.describe();
user1.rename("Veli");
user1.describe();

/**
 * Factory Payttern => object üreten fonksiyon
 * nesne üretme sorumluluğunu soyutlar
 * Fabrika gibi çalışan bir fonksiyon
 */

//Factory Function: Parametre alacak ve  içindebir oject literal üretip döndürecek
function createUser(id, name, email) {
    return {
        id,
        name,
        email,
        describe() {
            console.log(`${this.id} => Name: ${this.name}, Email: ${this.email}`);
        }
    };
}

const user2 = createUser(2, "Ayşe", "a@gmail.com");
const user3 = createUser(3, "Fatma", "f@gmail.com");

//ES6 class gelmeden önce JS OOp prototip constructor function üzerine kuruluydu
function User(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;

    this.describe = function () { } //her instance için ayrı ayrı oluşturulur, Ram kullanımı açısından verimsiz
}

//İdeal yöntem metotlar prototip üzerinde tutulur
User.prototype.describe = function () {
    console.log(`${this.id} => Name: ${this.name}, Email: ${this.email}`);
}

User.prototype.changeEmail = function (newEmail) {
    this.email = newEmail;
}

const u4 = new User(4, "Mehmet", "m@gmail.com");
u4.describe();
u4.changeEmail("asdöq@gömail.com");
u4.describe();

//Bu şekilde prototip bazlı yapıda tüm User instance'ları tek bir prototip object'ini paylaşır. Yani describe, changeEmail her seferinde Ram'e kopyalanmaz. Tüm instanceler aynı davranış kümesini paylaşır

class Customer {
    //constructor metot
    constructor(id, name, balance = 0) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Sayın ${this.name}, hesabınıza ${amount} TL yatırılmıştır. Güncel bakiyeniz: ${this.balance} TL`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Yetersiz bakiye!");
            return;
        }
        this.balance -= amount;
        console.log(`Sayın ${this.name}, hesabınızdan ${amount} TL çekilmiştir. Güncel bakiyeniz: ${this.balance} TL`);
    }

    //Bu aşağıdaki fonksiyonu virtual olarak düşünebiliriz
    getInfo() {
        console.log(`Müşteri Bilgileri => ID: ${this.id}, İsim: ${this.name}, Bakiye: ${this.balance} TL`);
    }
}

const cust1 = new Customer(1, "Zeynep", 500);
cust1.getInfo();
cust1.deposit(200);
cust1.withdraw(100);
cust1.withdraw(700);

//Inheritance (extends) ve Polymorphism (override)
console.log("==== Inheritance & Polymorphism ====");

class VIPCustomer extends Customer {
    constructor(id, name, balance, vipLevel) {
        super(id, name, balance); //base class constructor
        this.vipLevel = vipLevel;
    }

    //override(polymorphism)
    getInfo() {
        console.log(`VIP Müşteri Bilgileri => ID: ${this.id}, İsim: ${this.name}, Bakiye: ${this.balance} TL, VIP Seviye: ${this.vipLevel}`);
    }

    //VIP müşterilere özel metot
    getSpecialDiscount() {
        const discount = this.vipLevel * 5; //örnek indirim hesaplama
        console.log(`Sayın ${this.name}, size özel indirim oranınız: %${discount}`);
    }
}

const vip1 = new VIPCustomer(2, "Osman", 2000, 3);
vip1.getInfo();
vip1.deposit(300);
vip1.getSpecialDiscount();

//Base Type referansı altında derived instanceları tutabiliriz
const customers = [
    new Customer(3, "Ece", 800),
    new VIPCustomer(4, "Can", 5000, 2)
];

for (const cust of customers) {
    cust.getInfo(); //her instance kendi getInfo'sunu çağırır (polymorphism)
}


//Encapsulation (private field & method): iç detayların gizlenmesi

/**
 * 1) class içi #privateField (modern, resmi syntax)
 * 
 * 2) closure ile state olarak private saklamak
 * 
 * #privateField Node 12+ ve modern tarayıcılar tarafından desteklenir
 */

class BankAccount {
    #balance = 0; //private field

    deposit(amount) {
        this.#balance += amount;
    }
}

const acc = new BankAccount();
console.log(acc.balance); //undefined

//Base Class + Abstract Class
console.log("==== Abstract Class Simulation ====");
class Shape {
    constructor(name) {
        this.name = name;
    }

    //pseudo abstract method: miras verilen sınıflarda override edilmesi zorunludur
    area() {
        throw new Error("area() tanımlanmalıdır!");
    }

    describe() {
        console.log(`Shape: ${this.name}, Area: ${this.area()}`);
    }
}


class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const shapes = [
    new Circle(5),
    new Rectangle(4, 6)
];

for (const shape of shapes) {
    shape.describe(); 
    console.log("Area:", shape.area());//her şekil kendi area'sını hesaplar
}


/**
 * Composition vs Inheritance
 * 
 * Composition: bir "has-a" ilişkisi kurar. Örneğin, bir Araba "has-a" Motor.
 * 
 * Composition Over Inheritance prensibi nedir araştır.
 */
