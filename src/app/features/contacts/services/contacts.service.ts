import { Injectable, signal } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  private contactsSignal = signal<Contact[]>([]); //estado interno del contacto en el service

  contacts = this.contactsSignal.asReadonly(); //estado publico del contacto para leer el valor solamente

  selectedContact = signal<{ contact: Contact; index: number } | null>(null); //Es un signal que guarda: El contacto que estás editando O null si no estás editando nada

  addContact(contact: Contact) {
    this.contactsSignal.update((c) => [...c, contact]);
  }

  removeContact(index: number) {
    this.contactsSignal.update((c) => c.filter((_, i) => i !== index));
  }

  selectContact(contact: Contact, index: number) {
    //Es una función que cambia el estado de la app. Solo dice: “este es el contacto que voy a editar”
    this.selectedContact.set({ contact, index }); //edita la señal con los parametros de la funcion
  }

  cancelEdit() {
    this.selectedContact.set(null);
  }

  updateContact(updated: Contact) {
    //Reemplaza el contacto seleccionado por el contacto editado y sale del modo edición
    const selected = this.selectedContact();
    if (!selected) return;

    this.contactsSignal.update((c) => c.map((item, i) => (i === selected.index ? updated : item)));

    this.selectedContact.set(null);
  }
}
