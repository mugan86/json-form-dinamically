import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormComplexComponent } from './json-form-complex.component';

describe('JsonFormComplexComponent', () => {
  let component: JsonFormComplexComponent;
  let fixture: ComponentFixture<JsonFormComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonFormComplexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonFormComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
