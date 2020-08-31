import { InjectionToken } from "@angular/core";
import { GloomhavenParty } from "@gloomhaven-tracker/api-interfaces";
import { Observable } from "rxjs";

export interface PartyService {
  getParties(): Observable<Array<GloomhavenParty>>;
}

export const PARTY_SERVICE_TOKEN = new InjectionToken<PartyService>('PartyService');
