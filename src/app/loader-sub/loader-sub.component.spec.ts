import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderSubComponent } from './loader-sub.component';

describe('LoaderSubComponent', () => {
  let component: LoaderSubComponent;
  let fixture: ComponentFixture<LoaderSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderSubComponent]
    });
    fixture = TestBed.createComponent(LoaderSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
