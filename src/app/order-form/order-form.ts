import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './order-form.html',
  styleUrl: './order-form.css',
})
export class OrderForm {
  purchaseForm : any;

  constructor(private formBuilder: FormBuilder) {}

    ngOnInit() : void {
      this.purchaseForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]]
        // email: ['', [Validators.required, Validators.email]],
        // product: ['', Validators.required],
        // quantity: [1, [Validators.required, Validators.min(1)]]
      });
    }

    submitForm() : void {

  if (this.purchaseForm.invalid) {
    this.purchaseForm.markAllAsTouched();  
    return;
  }

  alert(`Form data: ${JSON.stringify(this.purchaseForm.value)}`);
}
}
