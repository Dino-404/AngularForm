import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  formData: { name: string, value: any }[];

  constructor(@Inject(MAT_DIALOG_DATA) public formGroup: FormGroup) {
    this.formData = Object.entries(formGroup.value).map(([name, value]) => ({ name, value }));
  }
}
