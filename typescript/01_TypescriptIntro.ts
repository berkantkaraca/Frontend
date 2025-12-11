// npm list -g --depth=0
// npm install -g typescript
// tsc --version

// Typescript = JavaScript + Types desteği
// runtime davranışı JavaScript ile aynı
// compile time'da (build durumunda) type hatalarını yakalar

function addTs(a: number, b: number): number {
    //a: number ve b: number olmak zorunda. compiletime garantisi verir
    return a + b;
    //static world: a ve b'nin tipini compile time'da anlarız
}
console.log(addTs(1, 2)); // 3
//console.log(addTs("1", "2")); //hata verir ve derlenmez. Js'te normal çalışır Ts buildinde compiletime hatası verir

//tsc --init  => tsconfig.json dosyasını oluşturur
//tsc 01_TypescriptIntro.ts => dosya build edilir ve aynı klasörde 01_TypescriptIntro.js dosyasını oluşturur
