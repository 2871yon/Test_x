import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grig1Component } from './grig1.component';

describe('Grig1Component', () => {
  let component: Grig1Component;
  let fixture: ComponentFixture<Grig1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grig1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grig1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
