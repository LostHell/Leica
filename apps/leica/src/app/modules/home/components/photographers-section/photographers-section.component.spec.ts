import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographersSectionComponent } from './photographers-section.component';

describe('PhotographersSectionComponent', () => {
  let component: PhotographersSectionComponent;
  let fixture: ComponentFixture<PhotographersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographersSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
