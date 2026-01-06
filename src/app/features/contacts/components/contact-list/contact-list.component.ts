import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-list',
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent {
  message = signal('');
  private contactsService = inject(ContactsService);
  contacts = this.contactsService.contacts;

  remove(index: number) {
    console.log(this.message);
    const confirmed = confirm('¿Seguro que deseas eliminar este contacto?');
    if (!confirmed) return;
    this.contactsService.removeContact(index);
    this.message.set('Contacto eliminado');

    setTimeout(() => {
      this.message.set('');
    }, 2000);
  }

  edit(contact: any, index: number) {
    this.contactsService.selectContact(contact, index);
  }
}
