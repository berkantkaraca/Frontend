function greet(name: string): string {
    return `Hello, ${name}!`;
}

const msg = greet("TypeScript Developer");

//Optional Parameters
// ? işareti ile parametre opsiyonel yapılabilir
//Type: string | undefined olarak düşünülebilir
function log(messsage: string, level?: "info" | "warning" | "error"): void {
    const finalLevel = level ?? "info";
    console.log(`[${finalLevel.toUpperCase()}]: ${messsage}`);
}
log("Application started");
log("An error occurred", "error");

//Default Parameters
function logWithDefault(messsage: string, level: "info" | "warning" | "error" = "info"): void {
    console.log(`[${level.toUpperCase()}]: ${messsage}`);
}
logWithDefault("Application started");
logWithDefault("An error occurred", "warning");

