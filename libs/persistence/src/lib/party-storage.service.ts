import {Injectable} from '@angular/core';
import {JSONSchemaArray, JSONSchemaObject, StorageMap} from '@ngx-pwa/local-storage';
import {GloomhavenCampaign} from '@gloomhaven-tracker/api-interfaces';
import {map, mergeMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

const CAMPAIGNS_KEY = 'campaigns';

// TODO@pesok create schema builder
const SCHEMA_OBJECT: JSONSchemaObject = {type: 'object', properties: {}};
const SCHEMA_ARRAY_OF_OBJECTS: JSONSchemaArray = {type: 'array', items: SCHEMA_OBJECT};

@Injectable()
export class PartyStorageService {

  constructor(private storage: StorageMap) {}

  public createParty(partyName: string): Observable<undefined> {
    const campaign: GloomhavenCampaign = {
      gloomhaven: {
        prosperity: 0,
        achievements: []
      },
      party: {
        name: partyName,
        reputation: 0,
        achievements: [],
        currentLocation: {
          name: 'Gloomhaven'
        },
        members: []
      }
    }

    return this.fetchParties().pipe(
      tap(campaigns => campaigns.push(campaign)),
      mergeMap(campaigns => this.storage.set(CAMPAIGNS_KEY, campaigns))
    );
  }

  public fetchParties(): Observable<GloomhavenCampaign[]> {
    return this.storage.get<GloomhavenCampaign[]>(CAMPAIGNS_KEY).pipe(
      map(campaigns => campaigns ?? []),
      map(campaigns => campaigns as GloomhavenCampaign[])
    );
  }

  public deleteParty(id: number): Observable<string | undefined> {
    if (id < 0) {
      return of('Unable to remove non existing element. Negative value');
    }

    return this.fetchParties().pipe(
      mergeMap(campaigns => {
        if (campaigns.length == 0 || campaigns.length <= id) {
          return of('Unable to remove non existing element. Index out of bounds');
        }

        campaigns.splice(id, 1);

        return this.storage.set(CAMPAIGNS_KEY, campaigns);
      })
    )
  }
}
