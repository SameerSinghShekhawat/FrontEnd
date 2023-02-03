import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarformviewComponent } from './scholarformview.component';

describe('ScholarformviewComponent', () => {
  let component: ScholarformviewComponent;
  let fixture: ComponentFixture<ScholarformviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarformviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarformviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
