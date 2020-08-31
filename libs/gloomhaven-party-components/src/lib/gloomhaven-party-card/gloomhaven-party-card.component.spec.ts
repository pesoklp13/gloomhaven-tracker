import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloomhavenPartyCardComponent } from './gloomhaven-party-card.component';

describe('GloomhavenPartyCardComponent', () => {
  let component: GloomhavenPartyCardComponent;
  let fixture: ComponentFixture<GloomhavenPartyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloomhavenPartyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloomhavenPartyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
