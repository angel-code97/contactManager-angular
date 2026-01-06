import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  constructor() {
    effect(() => {
      //“Ejecuta código cada vez que cambie un signal que se use dentro” “El effect NO controla El effect REACCIONA”
      // Usuario hace algo → método
      // Dato depende de otro → computed
      // Estado cambia → effect
      const selected = this.contactsService.selectedContact();

      if (selected) {
        this.form.patchValue(selected.contact);
      } else {
        this.form.reset();
      }
    });
  }

  message = signal('');
  private fb = inject(FormBuilder);
  private contactsService = inject(ContactsService);

  selectedContact = this.contactsService.selectedContact;

  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
  });

  cancelEdit() {
    this.contactsService.cancelEdit();
  }

  submit() {
    if (this.form.invalid) return;

    if (this.contactsService.selectedContact()) {
      //esta en edicion
      this.contactsService.updateContact(this.form.getRawValue());
      this.form.reset();
    } else {
      this.contactsService.addContact(this.form.getRawValue());
      this.form.reset();
      this.message.set('Contacto agregado');
      setTimeout(() => {
        this.message.set('');
      }, 2000);
    }
  }
}
