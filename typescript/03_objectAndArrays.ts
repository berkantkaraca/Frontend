//JS normal object literal
const user = {
    id: 1,
    name: "Jean-Luc Picard",
    rank: "Captain"
};

//TS'de object type annotation
const otherUser: {
    id: number;
    name: string;
    rank: string;
    isActive: boolean;
} = {
    id: 2,
    name: "William Riker",
    rank: "First Officer",
    isActive: true
};

//Array Types

//sadece sayı
const scores : number[] = [98, 85, 76, 88];

//sadece string
const gemiIsimleri: string[] = ["Atılgan", "Voyager", "Defiant"];

//mixed array: sadece ihtiyaç olduğunda kullanın
const mixed: (number | string | boolean)[] = [1, "İkinci", true, 4, "Beşinci", false];

//object array
const tayfa : {
    id: number;
    name: string;
    role: string;
}[] = [
    { id: 1, name: "Data", role: "Bilim Subayı" },
    { id: 2, name: "Geordi La Forge", role: "Mühendislik Subayı" }
];

function tayfayiYazdir(tayfaListesi: { id: number; name: string; role: string }[]): void { //void işaretlendiği için geriye bir şey döndürmüyor
    for (const eleman of tayfaListesi) {
        console.log(`ID: ${eleman.id}, İsim: ${eleman.name}, Rol: ${eleman.role}`);
    }
}

tayfayiYazdir(tayfa);
