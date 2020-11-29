import { Component, ElementRef, EventEmitter, Input, Output, QueryList, Renderer2, ViewChildren } from "@angular/core";
import { GloomhavenParty } from "@gloomhaven-tracker/api-interfaces";
import { MatDialog } from "@angular/material/dialog";
import { DeletePartyDialogComponent } from "./modal/delete-party-dialog.component";

@Component({
  selector: "ght-parties",
  templateUrl: "./gloomhaven-parties.component.html",
  styleUrls: ["./gloomhaven-parties.component.scss"]
})
export class GloomhavenPartiesComponent {

  @Input()
  parties: Array<GloomhavenParty>;

  @Output()
  addParty: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  selectParty: EventEmitter<GloomhavenParty> = new EventEmitter<GloomhavenParty>();

  @Output()
  deleteParty: EventEmitter<GloomhavenParty> = new EventEmitter<GloomhavenParty>();

  @ViewChildren("card, addNew", { read: ElementRef }) cardRefs: QueryList<ElementRef>;

  constructor(private renderer: Renderer2, private dialog: MatDialog) {}

  selectPartyClicked($event: MouseEvent, party: GloomhavenParty) {
    this.toggleActive($event);

    this.selectParty.emit(party);
  }

  createNewPartyClicked($event: MouseEvent) {
    this.toggleActive($event);

    this.addParty.emit();
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

  private toggleActive($event: MouseEvent) {
    this.cardRefs.forEach(element => {
      this.renderer.removeClass(element.nativeElement, "accent-active");
    });

    this.renderer.addClass($event.currentTarget, "accent-active");
  }
}
