import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelecaoDialogComponent } from './delecao-dialog.component';

describe('DelecaoDialogComponent', () => {
  let component: DelecaoDialogComponent;
  let fixture: ComponentFixture<DelecaoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelecaoDialogComponent]
    });
    fixture = TestBed.createComponent(DelecaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
