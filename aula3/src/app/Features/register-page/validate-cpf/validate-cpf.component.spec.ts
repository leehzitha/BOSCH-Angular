import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCPFComponent } from './validate-cpf.component';

describe('ValidateCPFComponent', () => {
  let component: ValidateCPFComponent;
  let fixture: ComponentFixture<ValidateCPFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateCPFComponent]
    });
    fixture = TestBed.createComponent(ValidateCPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
