//union type: bir değişkenin birden fazla tiptena alabileceğini belirtir
// number | string = number yada string olabilir

//Basic union: o da bir değişkenin sadece belirlediğiniz değerlerden birini alabileceğini belirtir
let responseCode: 200 | 400 | 500;
responseCode = 200; //geçerli
//responseCode = 404; //hata: 404 union içinde yok

//Litereal union + type ketword
//Type: bir type ifadesine isim verebilirsiniz
type HttpStatus = 200 | 400 | 500;
let apiStatus: HttpStatus;
apiStatus = 400; //geçerli
//apiStatus = 404; //hata: 404 union içinde yok
//apiStatus = "dkslfjskl"; //hata

type UserRole = "Admin" | "User" | "Visitor";

//type keyword ile obje tanımı
type User = {
    id: number;
    name: string;
    role: UserRole;
    isBanned: boolean;
};

const adminUser: User = {
    id: 1,
    name: "John Doe",
    role: "Admin",
    isBanned: false
};

//type keyword ile karmaşık tyoe ifadelerini isimlendirebilirsiniz
//union aslında bir nevi veri yapısıdır
//Http Response, ViewModel gibi yapılar için kullanışlıdır
function printUserRole(user: User | null) : void {
    if (user === null) {
        console.log("No user provided");
        return;
    }

    console.log(`User Name: ${user.name}, User Role: ${user.role}`);
}


















