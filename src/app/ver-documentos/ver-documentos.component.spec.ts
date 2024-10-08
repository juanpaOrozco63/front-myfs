import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDocumentosComponent } from './ver-documentos.component';

describe('VerDocumentosComponent', () => {
  let component: VerDocumentosComponent;
  let fixture: ComponentFixture<VerDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerDocumentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
