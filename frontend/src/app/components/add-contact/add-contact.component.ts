import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService, Contact } from '../../contact.service';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-contact.component.html'
})
export class AddContactComponent {
  newContact: Contact = {
    id: 0,
    fullName: '',
    email: '',
    phone: '',
    isFavorite: false
  };

  constructor(private contactService: ContactService) {}

  addContact(): void {
    this.contactService.createContact(this.newContact).subscribe(() => {
      alert('Contact added!');
      this.newContact = {
        id: 0,
        fullName: '',
        email: '',
        phone: '',
        isFavorite: false
      };
    });
  }
}
