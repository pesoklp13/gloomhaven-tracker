import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { GloomhavenPartiesComponent } from "./gloomhaven-parties.component";
// tslint:disable-next-line:nx-enforce-module-boundaries
import { MaterialMockModule } from "../../../../common-components/src/lib/material/material-mock.module.spec";
import { GloomhavenAvatarComponent } from "../gloomhaven-avatar/gloomhaven-avatar.component";
import { ElementRef, QueryList, Renderer2, Type } from "@angular/core";
import { GloomhavenParty } from "@gloomhaven-tracker/api-interfaces";

const createMouseEventStub = (): any => {
  return {
    currentTarget: {
      childNodes: []
    }
  };
}

describe("GloomhavenPartiesComponent", () => {
  let component: GloomhavenPartiesComponent;
  let fixture: ComponentFixture<GloomhavenPartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialMockModule
      ],
      declarations: [
        GloomhavenPartiesComponent,
        GloomhavenAvatarComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloomhavenPartiesComponent);
    const renderer2 = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
    const addClassSpy = jest.spyOn(renderer2, "addClass");
    addClassSpy.mockImplementation(() => {});

    component = fixture.componentInstance;
    component.cardRefs = new QueryList<ElementRef>();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit selected party", () => {
    const party: GloomhavenParty = {
      name: "Test Party"
    } as any;
    const emitSpy = jest.spyOn(component.selectParty, 'emit');

    component.selectPartyClicked(createMouseEventStub(), party);

    expect(emitSpy).toBeCalledWith(party);
  });

  it("should emit add new party", () => {
    const emitSpy = jest.spyOn(component.addParty, 'emit');

    component.createNewPartyClicked(createMouseEventStub());

    expect(emitSpy).toBeCalled();
  });
});
