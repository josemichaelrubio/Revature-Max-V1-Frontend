import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateLandingComponent } from './associate-landing.component';

describe('AssociateLandingComponent', () => {
  let component: AssociateLandingComponent;
  let fixture: ComponentFixture<AssociateLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociateLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
