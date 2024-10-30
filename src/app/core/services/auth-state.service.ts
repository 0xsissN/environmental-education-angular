import { Injectable } from "@angular/core";
import { Auth, authState, signOut } from "@angular/fire/auth";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthStateService {
    constructor(private auth: Auth) { }

    get authState$(): Observable<any> {
        return authState(this.auth)
    }

    logOut() {
        return signOut(this.auth)
    }
}