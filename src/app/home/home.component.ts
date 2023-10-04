import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  title: string = 'Listen up';
  imageUrl: string = '/assets/img/logo.png';

  constructor(private router: Router) {}

  goToModal() {
    setTimeout(() => {
      this.router.navigate(['/auth']);
    }, 500);
  }

  ngOnInit() {
    console.log('In OnInit');
  }
}
