/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KillmailViewComponent } from './killmail-view.component';

describe('KillmailViewComponent', () => {
  let component: KillmailViewComponent;
  let fixture: ComponentFixture<KillmailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillmailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillmailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
