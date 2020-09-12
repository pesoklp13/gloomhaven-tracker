import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { GloomhavenPartiesComponent } from "./gloomhaven-parties.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { GloomhavenPartyCardComponent } from "../gloomhaven-party-card/gloomhaven-party-card.component";
import { GloomhavenParty, PARTY_SERVICE_TOKEN } from "@gloomhaven-tracker/api-interfaces";
import { Observable, of } from "rxjs";
// tslint:disable-next-line:nx-enforce-module-boundaries
import { MaterialMockModule } from "../../../../common-components/src/lib/material/material-mock.module.spec";

describe("GloomhavenPartiesComponent", () => {
  let component: GloomhavenPartiesComponent;
  let fixture: ComponentFixture<GloomhavenPartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialMockModule
      ],
      declarations: [GloomhavenPartiesComponent, GloomhavenPartyCardComponent],
      providers: [
        {
          provide: PARTY_SERVICE_TOKEN, useValue: {
            getParties(): Observable<Array<GloomhavenParty>> {
              return of([]);
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloomhavenPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
