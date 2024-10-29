import { Component } from '@angular/core';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.scss'
})
export class FormContactComponent {
  showMessage(){
    toast.success('Mensaje enviado correctamente')
  }
}
