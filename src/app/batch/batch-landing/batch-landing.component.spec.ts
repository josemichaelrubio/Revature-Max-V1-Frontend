import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchLandingComponent } from './batch-landing.component';

describe('BatchLandingComponent', () => {
  let component: BatchLandingComponent;
  let fixture: ComponentFixture<BatchLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
