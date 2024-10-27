import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { NgIf } from '@angular/common';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isAuth: boolean = false
  constructor(private authState: AuthStateService, private router: Router) { }
  ngOnInit() {
    this.authState.authState$.subscribe((state) => {
      this.isAuth = !!state
    })
  }

  async logOut() {
    await this.authState.logOut()
    toast.success('Hasta pronto!!')
    this.router.navigateByUrl('/home')
  }
}
