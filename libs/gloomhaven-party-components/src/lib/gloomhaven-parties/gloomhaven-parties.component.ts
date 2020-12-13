import { Component, ElementRef, EventEmitter, Input, Output, QueryList, Renderer2, ViewChildren } from "@angular/core";
import { GloomhavenParty } from "@gloomhaven-tracker/api-interfaces";
import { MatDialog } from "@angular/material/dialog";
import { DeletePartyDialogComponent } from "./modal/delete-party-dialog.component";

const ACCENT_ACTIVE = "accent-active";

@Component({
  selector: "ght-parties",
  templateUrl: "./gloomhaven-parties.component.html",
  styleUrls: ["./gloomhaven-parties.component.scss"]
})
export class GloomhavenPartiesComponent {

  constructor(private renderer: Renderer2, private dialog: MatDialog) {}

  @Input()
  parties: Array<GloomhavenParty>;

  @Output()
  addParty: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  selectParty: EventEmitter<GloomhavenParty | null> = new EventEmitter<GloomhavenParty | null>();

  @Output()
  deleteParty: EventEmitter<GloomhavenParty> = new EventEmitter<GloomhavenParty>();

  @ViewChildren("card, addNew", { read: ElementRef }) cardRefs: QueryList<ElementRef>;

  private static isAlreadyActive(element: HTMLElement): boolean {
    return element.classList.contains(ACCENT_ACTIVE);
  }

  selectPartyClicked($event: MouseEvent, party: GloomhavenParty) {
    const activated = this.toggleActive($event);

    this.selectParty.emit(activated ? party : null);
  }

  createNewPartyClicked($event: MouseEvent) {
    const activated = this.toggleActive($event);

    this.addParty.emit(activated);
  }

  deletePartyClicked($event: MouseEvent, party: GloomhavenParty) {
    const deleteDialog = this.dialog.open(DeletePartyDialogComponent, {
      data: party
    });

    deleteDialog.afterClosed()
      .subscribe(confirmed => {
        if (confirmed) {
          this.deleteParty.emit(party);
        }
      });
  }

  private toggleActive($event: MouseEvent): boolean {
    const currentElement = $event.currentTarget as any;
    if (GloomhavenPartiesComponent.isAlreadyActive(currentElement)) {
      this.removeActive($event);

      return false;
    }

    this.cardRefs.forEach(element => {
      this.renderer.removeClass(element.nativeElement, ACCENT_ACTIVE);
    });

    this.renderer.addClass($event.currentTarget, ACCENT_ACTIVE);

    return true;
  }

  private removeActive($event: MouseEvent) {
    this.renderer.removeClass($event.currentTarget, ACCENT_ACTIVE);
  }
}
