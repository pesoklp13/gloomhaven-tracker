import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  Renderer2,
  ViewChildren
} from "@angular/core";
import { GloomhavenCampaign } from "@gloomhaven-tracker/api-interfaces";
import { MatDialog } from "@angular/material/dialog";
import { DeletePartyDialogComponent } from "./modal/delete-party-dialog.component";

const ACCENT_ACTIVE = "accent-active";

@Component({
  selector: "ght-parties",
  templateUrl: "./gloomhaven-parties.component.html",
  styleUrls: ["./gloomhaven-parties.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GloomhavenPartiesComponent {

  constructor(private renderer: Renderer2, private dialog: MatDialog) {}

  @Input()
  campaigns: Array<GloomhavenCampaign>;

  @Output()
  addParty: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  selectedCampaign: EventEmitter<GloomhavenCampaign | null> = new EventEmitter<GloomhavenCampaign | null>();

  @Output()
  deleteCampaign: EventEmitter<string> = new EventEmitter<string>();

  @ViewChildren("card, addNew", { read: ElementRef }) cardRefs: QueryList<ElementRef>;

  private static isAlreadyActive(element: HTMLElement): boolean {
    return element.classList.contains(ACCENT_ACTIVE);
  }

  selectPartyClicked($event: MouseEvent, party: GloomhavenCampaign) {
    const activated = this.toggleActive($event);

    this.selectedCampaign.emit(activated ? party : null);
  }

  createNewPartyClicked($event: MouseEvent) {
    const activated = this.toggleActive($event);
    this.removeActive($event);

    this.addParty.emit(activated);
  }

  deletePartyClicked($event: MouseEvent, party: GloomhavenCampaign) {
    const deleteDialog = this.dialog.open(DeletePartyDialogComponent, {
      data: party
    });

    deleteDialog.afterClosed()
      .subscribe(confirmed => {
        if (confirmed) {
          this.deleteCampaign.emit(party.uid);
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
