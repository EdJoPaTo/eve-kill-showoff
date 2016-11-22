/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KillViewComponent } from './kill-view.component';

describe('KillViewComponent', () => {
  let component: KillViewComponent;
  let fixture: ComponentFixture<KillViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
