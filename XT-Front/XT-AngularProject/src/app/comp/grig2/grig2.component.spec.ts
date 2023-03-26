import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grig2Component } from './grig2.component';

describe('Grig2Component', () => {
  let component: Grig2Component;
  let fixture: ComponentFixture<Grig2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grig2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grig2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
