import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutehomeComponent } from './institutehome.component';

describe('InstitutehomeComponent', () => {
  let component: InstitutehomeComponent;
  let fixture: ComponentFixture<InstitutehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
