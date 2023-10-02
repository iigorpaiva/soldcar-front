import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatiosComponent } from './patios.component';

describe('PatiosComponent', () => {
  let component: PatiosComponent;
  let fixture: ComponentFixture<PatiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatiosComponent]
    });
    fixture = TestBed.createComponent(PatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
