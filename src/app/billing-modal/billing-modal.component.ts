import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'billing-modal',
  templateUrl: './billing-modal.component.html',
  styleUrls: ['./billing-modal.component.css'],
})

export class BillingModalComponent {
  @Output() closeModalEvent = new EventEmitter();
  selectedDate: Date = new Date();
  selectedDay: string;

  constructor() {
    this.selectedDate = new Date();
    this.selectedDay = this.selectedDate.getDate().toString();
  }

  confirmDate(): void {
    this.selectedDate = new Date(this.selectedDate);
    this.selectedDay = this.selectedDate.getDate().toString();

    // this.closeModal();
  }

  updateSelectedDate(): void {
    this.selectedDate = new Date(this.selectedDate);
    this.selectedDay = this.selectedDate.getDate().toString();
  }

  getDaySuffix(day: string): string {
    const lastDigit = +day.charAt(day.length - 1);
    switch (lastDigit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
