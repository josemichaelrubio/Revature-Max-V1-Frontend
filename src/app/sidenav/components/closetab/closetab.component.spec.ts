import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetabComponent } from './closetab.component';

describe('ClosetabComponent', () => {
  let component: ClosetabComponent;
  let fixture: ComponentFixture<ClosetabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosetabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosetabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
