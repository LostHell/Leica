import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveInputComponent } from './reactive-input.component';

describe('ReactiveInputComponent', () => {
  let component: ReactiveInputComponent;
  let fixture: ComponentFixture<ReactiveInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
