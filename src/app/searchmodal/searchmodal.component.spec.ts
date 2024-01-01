import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmodalComponent } from './searchmodal.component';

describe('SearchmodalComponent', () => {
  let component: SearchmodalComponent;
  let fixture: ComponentFixture<SearchmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchmodalComponent]
    });
    fixture = TestBed.createComponent(SearchmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
