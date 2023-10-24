import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoUsuarioDialogComponent } from './edicao-usuario-dialog.component';

describe('EdicaoUsuarioDialogComponent', () => {
  let component: EdicaoUsuarioDialogComponent;
  let fixture: ComponentFixture<EdicaoUsuarioDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdicaoUsuarioDialogComponent]
    });
    fixture = TestBed.createComponent(EdicaoUsuarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
