//Star Trek vs Star Wars
//Tur bazlı savaş similasyonu

/**Kullanıcı 
 * 1) Öncelikle tarafını seçer (Star Trek veya Star Wars)
 * 2) Tarafa göre bir gemi seçecek (Enterprise-D, Defiant, Star Destroyer vs)
 * 3) Diğer gemi PC tarafından rastgele yönelir
 * 3) Sıra kullancıda olduğunda komut saqtırından bir seçim yapar
 *      - Basic Attack (temel atak)
 *      - Reinforce Shields (defans misali kalkanları güçlendir)
 *      - Special Ability (geminin kendine has özel yeteneği)
 * 
 * star trek tarafında daha utiliy based(daha akıllı özellikler)
 */

// nodejs'teki kullanıcıdan satır satır input almayı sağlayan modül => require('readline') (built-in module)
//reaqdline.createInterface metoduyla bir arayüz oluşturuyoruz => input ve output parametreleri ile
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//callback tabankı rl.question çağrısı yaptığımız zaman daha kolay kullanmak için bunu promise'e saran bir yardımcı fonksiyon yazdık. Böylece async/await ile kullanabiliriz
function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer.trim());
        });
    });
}

//Logger ve Zar sınıfları
//Logger: logları kategorize etmek için temel basit bir sınıf
class Logger {
    info(msg) {
        console.log(`[Bilgi]: ${msg}`);
    }

    warn(msg) {
        console.log(`[Uyarı]: ${msg}`);
    }

    batlle(msg) {
        console.log(`[Savas]: ${msg}`);
    }

    state(msg) {
        console.log(`[Durum]: ${msg}`);
    }
}

//Dice Helper: Bu bize bir şans mekaniği sağlayacak
const Dice = {
    //1..max arası integer
    roll(max) {
        return Math.floor(Math.random() * max) + 1;
    },

    //min..max arası integer
    rollRange(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    },

    //%yüzde ihtimalle true döner
    percent(percent) {
        return Math.random() * 100 < percent;
    }
}

//Uzay Gemisi Sınıfı
//öncelikle br base(bütün gemileri temsil edecek) sınıf oluşturalım
class SpaceShip {
    constructor(config) {
        this.name = config.name;
        this.faction = config.faction; //star trek veya star wars

        this.maxHull = config.maxHull; //can
        this.hull = config.maxHull; //başlangıç canı max can ile aynı

        this.maxShields = config.maxShields; //kalkan
        this.shields = config.maxShields; //başlangıç kalkanı max kalkan ile aynı

        this.firepower = config.firepower; //ateş gücü
        this.evasion = config.evasion; //kaçınma durumu 0-50 (%)

        this.techLevel = config.techLevel; //teknoloji seviyesi 1-10 arası

        this.specialName = config.specialName;
        this.specialType = config.specialType; //trek_science, wars_brutal

        this.speacialCooldown = config.speacialCooldown || 3;
        this.speacialReadyIn = 0; //0 => kullanılabilir

        this.alive = true; //geminin hayatta olup olmadığı
    }

    isAlive() {
        return this.alive;
    }

    //Geminin özet durumu
    getStatusText() {
        return `${this.name} [${this.faction}] | Gövde Durumu: ${this.hull}/${this.maxHull}, Kalkan Durumu: ${this.shields}/${this.maxShields}`;
    }

    //Her tur başında bir takım değerler güncellenir (cooldown vs)
    onTurnStart() {
        //Özel yetenek zaman sayacı
        if (this.speacialReadyIn > 0) {
            this.speacialReadyIn -= 1;
        }

        //Basit otomatik kalkan dolumu
        let regenBase = 2;
        if (this.faction === "Star Trek") {
            regenBase = 5; //trek teknolojisi: shield managment daha iyi
        }

        const regen = regenBase;

        if (this.shields < this.maxShields) {
            this.shields += regen;
            if (this.shields > this.maxShields) {
                this.shields = this.maxShields;
            }

            logger.state(`${this.name} oto rejenere ${regen} kalkan dolumu`);
        }
    }

    //Hasar alma durumu 
    //Once shield'dan düier
    //Eğer shield kalmadıysa hull'a hasar gider
    takeDamage(rawDamage, logger, source) {
        if (!this.isAlive()) return;

        //Evasion kontrolü: kaçınma durumu
        if (Dice.percent(this.evasion)) {
            logger.batlle(`${this.name} gelen saldırıdan kaçındı!`);
            return;
        }

        let remaining = rawDamage; // öncelikle hasarı gelen brüt hasarı bir değişkende tutuyoruz

        if (this.shields > 0) {
            const absorbed = Math.min(this.shields, remaining);
        }

        this.shields -= absorbed;

        remaining -= absorbed;

        if (remaining > 0) {
            this.hull -= remaining;
        }

        if (this.hull <= 0) {
            this.hull = 0;
            this.alive = false;
        }

        const srcName = source ? source.name : "Unknown";

        logger.batlle(`${srcName} ${rawDamage} hasarı ${this.name}'e verdi! (Gövde: ${this.hull}/${this.maxHull}, Kalkan: ${this.shields}/${this.maxShields})`);

        if(!this.isAlive()) {
            logger.batlle(`${this.name} yok edildi!`);
        }
    }

    //Temel saldırı
    //ateş gücü + küçük bir şans faktörü
    basicAttack(target, logger) {
        if (!this.isAlive()) {
            logger.warn(`${this.name} saldırı yapamaz çünkü yok edildi!`);
            return;
        }

        const fluctuation = Dice.rollRange(-3, 3); 
        const damage =  Math.max(5, this.firepower + fluctuation); //minimum 5 hasar

        logger.batlle(`${this.name}, ${target.name} hedefine saldırı düzenliyor`);

        target.takeDamage(damage, logger, this);
    }

}        





