import { async, ComponentFixture, fakeAsync, flushMicrotasks, TestBed } from "@angular/core/testing";
import { GloomhavenPartiesComponent } from "./gloomhaven-parties.component";
// tslint:disable-next-line:nx-enforce-module-boundaries
import { MaterialMockModule } from "../../../../common-components/src/lib/material/material-mock.module.spec";
import { GloomhavenAvatarComponent } from "../gloomhaven-avatar/gloomhaven-avatar.component";
import { ElementRef, QueryList, Renderer2, Type } from "@angular/core";
import { GloomhavenCampaign } from "@gloomhaven-tracker/api-interfaces";
import { MatDialog } from "@angular/material/dialog";
import { of } from "rxjs";

const createMouseEventStub = (cls: Array<string> = []): any => {
  return {
    currentTarget: {
      childNodes: [],
      classList: {
        contains: (inputCls: string) => {
          return cls.includes(inputCls);
        }
      }
    }
  };
}

describe("GloomhavenPartiesComponent", () => {
  let component: GloomhavenPartiesComponent;
  let fixture: ComponentFixture<GloomhavenPartiesComponent>;
  let matDialog: MatDialog;

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
    const removeClassSpy = jest.spyOn(renderer2, "removeClass");
    addClassSpy.mockImplementation(() => {});
    removeClassSpy.mockImplementation(() => {});

    matDialog = fixture.componentRef.injector.get<MatDialog>(MatDialog as Type<MatDialog>);

    component = fixture.componentInstance;
    component.cardRefs = new QueryList<ElementRef>();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit selected party", () => {
    const party: GloomhavenCampaign = {
      name: "Test Party"
    } as any;
    const emitSpy = jest.spyOn(component.selectedCampaign, 'emit');

    component.selectPartyClicked(createMouseEventStub(), party);

    expect(emitSpy).toBeCalledWith(party);
  });

  it("should emit deselect party", () => {
    const party: GloomhavenCampaign = {
      name: "Test Party"
    } as any;
    const emitSpy = jest.spyOn(component.selectedCampaign, 'emit');

    component.selectPartyClicked(createMouseEventStub(["accent-active"]), party);

    expect(emitSpy).toBeCalledWith(null);
  });

  it("should emit add new party with 'true'", () => {
    const emitSpy = jest.spyOn(component.addParty, 'emit');

    component.createNewPartyClicked(createMouseEventStub());

    expect(emitSpy).toBeCalledWith(true);
  });

  it("should emit add new party with 'false'", () => {
    const emitSpy = jest.spyOn(component.addParty, 'emit');

    component.createNewPartyClicked(createMouseEventStub(["accent-active"]));

    expect(emitSpy).toBeCalledWith(false);
  });

  it("should emit delete party when confirmed deletion", fakeAsync(() => {
    const party: GloomhavenCampaign = {
      name: "Test Party"
    } as any;
    const emitSpy = jest.spyOn(component.deleteCampaign, 'emit');

    const matDialogRef = {
      afterClosed: () => of(true)
    } as any;
    jest.spyOn(matDialog, 'open').mockImplementation(() => matDialogRef);

    flushMicrotasks();

    component.deletePartyClicked(createMouseEventStub(), party);
    expect(emitSpy).toBeCalledWith(party);
  }));

  it("should not emit delete party when cancelled deletion", fakeAsync(() => {
    const party: GloomhavenCampaign = {
      name: "Test Party"
    } as any;
    const emitSpy = jest.spyOn(component.deleteCampaign, 'emit');

    const matDialogRef = {
      afterClosed: () => of(undefined)
    } as any;
    jest.spyOn(matDialog, 'open').mockImplementation(() => matDialogRef);

    flushMicrotasks();

    component.deletePartyClicked(createMouseEventStub(), party);
    expect(emitSpy).not.toBeCalled();
  }));
});
