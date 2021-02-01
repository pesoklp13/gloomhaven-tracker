import {Injectable} from '@angular/core';
import {JSONSchemaArray, JSONSchemaObject, StorageMap} from '@ngx-pwa/local-storage';
import {GloomhavenCampaign} from '@gloomhaven-tracker/api-interfaces';
import {map, mergeMap, tap} from 'rxjs/operators';
import {iif, Observable, of} from 'rxjs';
import {UUIDService} from '@gloomhaven-tracker/common-services';

const CAMPAIGNS_KEY = 'campaigns';

// TODO@pesok create schema builder
const SCHEMA_OBJECT: JSONSchemaObject = {type: 'object', properties: {}};
const SCHEMA_ARRAY_OF_OBJECTS: JSONSchemaArray = {type: 'array', items: SCHEMA_OBJECT};

@Injectable()
export class PartyStorageService {

  constructor(private storage: StorageMap, private uuid: UUIDService) {}

  public createParty(partyName: string): Observable<string> {
    const campaign: GloomhavenCampaign = {
      uid: this.uuid.uuid4(),
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
      mergeMap(campaigns => this.storage.set(CAMPAIGNS_KEY, campaigns)),
      mergeMap(() => of(campaign.uid))
    );
  }

  public fetchParties(): Observable<GloomhavenCampaign[]> {
    return this.storage.get<GloomhavenCampaign[]>(CAMPAIGNS_KEY).pipe(
      map(campaigns => campaigns ?? []),
      map(campaigns => campaigns as GloomhavenCampaign[])
    );
  }

  public deleteParty(uid: string): Observable<string | undefined> {
    return this.fetchParties().pipe(
      mergeMap(campaigns => {
        const updatedCampaigns = campaigns.filter((campaign) => campaign.uid !== uid);

        if (updatedCampaigns.length === campaigns.length) {
          return of('Unable to remove non existing element');
        }

        return this.storage.set(CAMPAIGNS_KEY, updatedCampaigns);
      })
    );
  }
}
