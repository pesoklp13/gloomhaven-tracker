import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloomhavenPartyCardComponent } from './gloomhaven-party-card.component';
import { MaterialModule, MatIconRegistryModule } from "@gloomhaven-tracker/common-components";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialMockModule } from "../../../../common-components/src/lib/material/material-mock.module.spec";

describe('GloomhavenPartyCardComponent', () => {
  let component: GloomhavenPartyCardComponent;
  let fixture: ComponentFixture<GloomhavenPartyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialMockModule
      ],
      declarations: [ GloomhavenPartyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloomhavenPartyCardComponent);
    component = fixture.componentInstance;
    component.party = {
      name: 'party',
      reputation: 0,
      prosperity: 0,
      level: 0,
      members: []
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
