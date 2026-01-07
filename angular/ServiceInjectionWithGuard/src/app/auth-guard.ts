import { CanActivateFn, Router } from "@angular/router"; //root'a guard eklemek için
import { inject } from "@angular/core";
import { AuthService } from "./Services/AuthService";

//Route'a girmeden çalışır
//true => route'a girer
//false => route'a girmez

export const authGuard: CanActivateFn = () => {

    //Guard içinde inject:
    //constructor olmadan modern angular pattern'i
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.isLoggedIn()) {
        //giriş yapılmamışsa login sayfasına yönlendir
        router.navigate(["/login"]);
        return false;
    }


    return authService.isLoggedIn();
}