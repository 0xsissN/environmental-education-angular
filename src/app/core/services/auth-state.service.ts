import { inject, Injectable } from "@angular/core";
import { Auth, authState, signOut } from "@angular/fire/auth";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthStateService {
    auth = inject(Auth)

    get authState$(): Observable<any> {
        return authState(this.auth)
    }

    logOut() {
        return signOut(this.auth)
    }
}