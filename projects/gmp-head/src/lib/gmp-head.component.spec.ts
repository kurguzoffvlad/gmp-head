import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpHeadComponent } from './gmp-head.component';

describe('GmpHeadComponent', () => {
  let component: GmpHeadComponent;
  let fixture: ComponentFixture<GmpHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
