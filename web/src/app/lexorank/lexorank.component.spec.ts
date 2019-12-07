import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LexorankComponent } from './lexorank.component';

describe('LexorankComponent', () => {
  let component: LexorankComponent;
  let fixture: ComponentFixture<LexorankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LexorankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LexorankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
