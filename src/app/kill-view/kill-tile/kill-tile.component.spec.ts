/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KillTileComponent } from './kill-tile.component';

describe('KillTileComponent', () => {
  let component: KillTileComponent;
  let fixture: ComponentFixture<KillTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
