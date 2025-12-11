interface ICharacter {
    name: string;
    maxHp: number; //max health point
    hp: number;

    isAlive(): boolean;
    takeDamage(amount: number): void;
}

//Concrete class: ICharacter interface'ini implement etmek isters
class Warrior implements ICharacter {
    name: string;
    maxHp: number;
    hp: number;
    private armor: number; //sadece Warrior class'ı içinde erişilebilir

    constructor(name: string, maxHp: number, armor: number) {
        this.name = name;
        this.maxHp = maxHp;
        this.hp = maxHp;
        this.armor = armor;
    }

    isAlive(): boolean {
        return this.hp > 0;
    }

    takeDamage(amount: number): void {
        const netDamage = Math.max(0, amount - this.armor);
        this.hp -= netDamage;

        if (this.hp < 0) {
            this.hp = 0;
        }

        console.log(`${this.name}, ${netDamage} kadar hasar aldı. Kalan HP: ${this.hp}/${this.maxHp}`);
    }

    attack(target: ICharacter): void {
        console.log(`${this.name} karakteri ${target.name} karakterine saldırıyor!`);
    }
}

class Mage implements ICharacter {
    name: string;
    maxHp: number
    hp: number;
    private mana: number; //sadece Mage class'ı içinde erişilebilir

    constructor(name: string, maxHp: number, mana: number) {
        this.name = name;
        this.maxHp = maxHp;
        this.hp = maxHp;
        this.mana = mana;
    }

    isAlive(): boolean {
        return this.hp > 0;
    }

    takeDamage(amount: number): void {
        this.hp -= amount;

        if (this.hp < 0) {
            this.hp = 0;
        }

        console.log(`${this.name}, ${amount} kadar hasar aldı. Kalan HP: ${this.hp}/${this.maxHp}`);
    }

    castSpell(target: ICharacter): void {
        if (this.mana < 10) {
            console.log(`${this.name} yeterli mana'ya sahip değil!`);
            return;
        }

        this.mana -= 10;
        console.log(`${this.name} karakteri ${target.name} karakterine büyü yapıyor!`);
        target.takeDamage(15);
    }
}

abstract class Personel {
    name: string;
    tel: string;

    constructor(name: string, tel: string) {
        this.name = name;
        this.tel = tel;
    }

}

class Egitmen extends Personel {

}