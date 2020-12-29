import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerCardComponent } from './photographer-card.component';

describe('PhotographerCardComponent', () => {
  let component: PhotographerCardComponent;
  let fixture: ComponentFixture<PhotographerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
