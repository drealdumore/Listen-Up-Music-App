import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'billing-modal',
  templateUrl: './billing-modal.component.html',
  styleUrls: ['./billing-modal.component.css'],
})
export class BillingModalComponent {
  // @Output() closeModalEvent = new EventEmitter();

  // closeModal(): void {
  //   this.closeModalEvent.emit();
  // }

  // stopPropagation(event: Event): void {
  //   event.stopPropagation();
  // }

 
  // @Output() closeModalEvent = new EventEmitter();
  // selectedDate: Date = new Date(); // Assign a default value or initialize in the constructor

  // datePickerOptions: any = {}; // You can customize datepicker options here

  // closeModal(): void {
  //   this.closeModalEvent.emit();
  // }

  // stopPropagation(event: Event): void {
  //   event.stopPropagation();
  // }

  // confirmDate(): void {
  //   // Handle the selected date as needed
  //   console.log('Selected Date:', this.selectedDate);
  //   this.closeModal();
  // }

  @Output() closeModalEvent = new EventEmitter();
  selectedDate: Date = new Date(); // Assign a default value or initialize in the constructor

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  confirmDate(): void {
    // Handle the selected date as needed
    console.log('Selected Date:', this.selectedDate);
    this.closeModal();
  }
}
