import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandtabComponent } from './expandtab.component';

describe('ExpandtabComponent', () => {
  let component: ExpandtabComponent;
  let fixture: ComponentFixture<ExpandtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandtabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
