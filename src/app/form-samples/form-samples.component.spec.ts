import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSamplesComponent } from './form-samples.component';

describe('FormSamplesComponent', () => {
  let component: FormSamplesComponent;
  let fixture: ComponentFixture<FormSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
