import { Injectable, signal } from "@angular/core";

/**
    Kullanıcının login durumunu tutar
    gerçek projede token, API vs olur
*/

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private _isLoggedIn = signal<boolean>(false);
    isLoggedIn = this._isLoggedIn.asReadonly();

    login() : void {
        this._isLoggedIn.set(true);
    }

    logout() : void  {
        this._isLoggedIn.set(false);
    }
}