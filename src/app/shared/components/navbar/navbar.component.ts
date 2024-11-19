import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { toast } from 'ngx-sonner';
import { GeneratePdfComponent } from '../generate-pdf/generate-pdf.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isAuth: boolean = false;
  generate: GeneratePdfComponent = new GeneratePdfComponent();

  authState = inject(AuthStateService);
  router = inject(Router);

  ngOnInit() {
    this.authState.authState$.subscribe((state) => {
      this.isAuth = !!state;
    });
  }

  generatePDf() {
    toast.success('Cargando PDF');
    this.generate.generatePdf();
  }

  async logOut() {
    await this.authState.logOut();
    toast.success('Hasta pronto!!');
    this.router.navigateByUrl('/home');
  }
}
