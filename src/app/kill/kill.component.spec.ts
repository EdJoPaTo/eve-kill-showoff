/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KillComponent } from './kill.component';

describe('KillComponent', () => {
  let component: KillComponent;
  let fixture: ComponentFixture<KillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
