import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GloomhavenPartyCardComponent } from './gloomhaven-party-card.component';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
// tslint:disable-next-line:nx-enforce-module-boundaries
import { MaterialMockModule } from "../../../../common-components/src/lib/material/material-mock.module.spec";
import { GloomhavenAvatarComponent } from "../gloomhaven-avatar/gloomhaven-avatar.component";

describe('GloomhavenPartyCardComponent', () => {
  let component: GloomhavenPartyCardComponent;
  let fixture: ComponentFixture<GloomhavenPartyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialMockModule
      ],
      declarations: [
        GloomhavenPartyCardComponent,
        GloomhavenAvatarComponent
      ]
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
