/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KillListComponent } from './kill-list.component';

describe('KillListComponent', () => {
  let component: KillListComponent;
  let fixture: ComponentFixture<KillListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
