import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstformviewComponent } from './instformview.component';

describe('InstformviewComponent', () => {
  let component: InstformviewComponent;
  let fixture: ComponentFixture<InstformviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstformviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstformviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
