import { Component } from '@angular/core';
import { ContactListComponent } from '../components/contact-list/contact-list.component';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';

@Component({
  selector: 'app-contacts-page',
  imports: [ContactListComponent, ContactFormComponent],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.css',
  // template: `
  //   <h2>Contactos</h2>
  //   <p>Página de gestión de contactos</p>
  // `,
})
export class ContactsPageComponent {}
