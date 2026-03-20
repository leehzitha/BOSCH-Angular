import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoDetailsModalComponent } from './mercado-details-modal.component';

describe('MercadoDetailsModalComponent', () => {
  let component: MercadoDetailsModalComponent;
  let fixture: ComponentFixture<MercadoDetailsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MercadoDetailsModalComponent]
    });
    fixture = TestBed.createComponent(MercadoDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
