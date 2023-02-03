import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteregistrationComponent } from './instituteregistration.component';

describe('InstituteregistrationComponent', () => {
  let component: InstituteregistrationComponent;
  let fixture: ComponentFixture<InstituteregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
