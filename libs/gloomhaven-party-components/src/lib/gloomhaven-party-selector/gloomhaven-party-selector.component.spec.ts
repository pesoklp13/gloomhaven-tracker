import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { GloomhavenCampaign, CAMPAIGN_SERVICE_TOKEN } from "@gloomhaven-tracker/api-interfaces";
import { Observable, of } from "rxjs";
// tslint:disable-next-line:nx-enforce-module-boundaries
import { MaterialMockModule } from "../../../../common-components/src/lib/material/material-mock.module.spec";
import { GloomhavenAvatarComponent } from "../gloomhaven-avatar/gloomhaven-avatar.component";
import { GloomhavenPartySelectorComponent } from "./gloomhaven-party-selector.component";
import { GloomhavenPartiesComponent } from "../gloomhaven-parties/gloomhaven-parties.component";

describe("GloomhavenPartySelectorComponent", () => {
  let component: GloomhavenPartySelectorComponent;
  let fixture: ComponentFixture<GloomhavenPartySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialMockModule
      ],
      declarations: [
        GloomhavenPartySelectorComponent,
        GloomhavenPartiesComponent,
        GloomhavenAvatarComponent
      ],
      providers: [
        {
          provide: CAMPAIGN_SERVICE_TOKEN, useValue: {
            getParties(): Observable<Array<GloomhavenCampaign>> {
              return of([]);
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloomhavenPartySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
