//TS generix ile type safe hale getirilen preddicate fonksiyonlar

//T => boolean döndüren fonksiyonlar
type Predicate<T> = (item: T) => boolean;

//Generic filter
//T: Bu fonksiyonun çalışacağı tip
//arr: T[]: T tipinde elemanlardan oluşan dizi
//predicate: Predicate<T> her T için bir boolean döndüren fonksiyon         
function filterArray<T>(arr: T[], predicate: Predicate<T>): T[] {
    const result: T[] = [];
    for (const item of arr) {
        if (predicate(item)) {
            result.push(item);
        }
    }

    return result;
}

//Burada T
const numbers: number[] = [1, 2, 3, 4, 5, 6];

const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);

//Kullanım örneği
type StarShip = {
    name: string;
    faction: "Star Trek" | "Star Wars";
    firePower: number;
};

const ships: StarShip[] = [
    { name: "Enterprise-D", faction: "Star Trek", firePower: 90 },
    { name: "Enterprise-E", faction: "Star Trek", firePower: 97 },
    { name: "Defiant", faction: "Star Trek", firePower: 70 },
    { name: "X-Wing", faction: "Star Wars", firePower: 60 },
];

const starTrekShips = filterArray(ships, (ship) => ship.faction === "Star Trek");
const starWarsShips = filterArray(ships, (ship) => ship.faction === "Star Wars");
const powerfulShips = filterArray(ships, (ship) => ship.firePower > 60);

console.log("Star Trek Ships:", starTrekShips);
console.log("Star Wars Ships:", starWarsShips);
console.log("Powerful Ships:", powerfulShips);

console.table(evenNumbers);
console.table(numbers);
console.table(starTrekShips);


