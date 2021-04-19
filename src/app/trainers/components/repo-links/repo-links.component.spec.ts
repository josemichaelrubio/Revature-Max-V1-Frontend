import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoLinksComponent } from './repo-links.component';

describe('RepoLinksComponent', () => {
  let component: RepoLinksComponent;
  let fixture: ComponentFixture<RepoLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
