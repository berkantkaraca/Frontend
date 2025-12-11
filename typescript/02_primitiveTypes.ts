let x = 19; //Bu ztn Js'de de geçerli

//TS'de ise bunun üzerine tipiniz compile time'da bilinir
let deneme = 1;
//deneme = "deneme"; //hata verir

//Explicit Type Annotation
let counter: number = 0;
let userName: string = "Ahmet";
let isOnline: boolean = true;

//Any: Her şey olabilir
let something: any = 24;
something = "deneme";
something = {x:10};

//Type Inference(Tür Çıkarımı)
//TS sağdaki değerden tipi tespit edebilir
let autoNumber = 10; //number türünde olduğunu anlar
let autoText = "Merhaba"; //string türünde olduğunu anlar
//autoNumber = "deneme"; //hata verir

//null
//TS'de strictNullChecks true ise null ve undifined ayrı check edilir
let nullableNumber: number | null = null; //union type: number veya null olabilir

//TS sadece static type dünyasında çalışır
//runtime'da hal JS kodu çalışır



