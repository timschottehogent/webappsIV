import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PompenComponent } from './pompen.component';

describe('PompenComponent', () => {
  let component: PompenComponent;
  let fixture: ComponentFixture<PompenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PompenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PompenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
