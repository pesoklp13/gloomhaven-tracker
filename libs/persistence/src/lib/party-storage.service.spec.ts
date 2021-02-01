import {PartyStorageService} from './party-storage.service';
import {of} from 'rxjs';
import {TestScheduler} from 'rxjs/testing';

describe('PartyStorageService', () => {
  let service: PartyStorageService;
  let storageStub: any;
  let testScheduler: TestScheduler;
  const NIL_UUID = '00000000-0000-0000-0000-000000000000';

  beforeEach(() => {
    storageStub = {
      get: jest.fn(),
      set: jest.fn()
    };

    storageStub.set.mockImplementation(() => of(undefined));

    service = new PartyStorageService(storageStub, { uuid4: () => NIL_UUID });
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('createParty', () => {

    it('should create first party with name', () => {
      storageStub.get.mockImplementation(() => of(undefined));

      const expectedCampaigns = [{
        uid: NIL_UUID,
        gloomhaven: {
          prosperity: 0,
          achievements: []
        },
        party: {
          name: 'first party',
          reputation: 0,
          achievements: [],
          currentLocation: {
            name: 'Gloomhaven'
          },
          members: []
        }
      }];

      testScheduler.run(({expectObservable, flush}) => {
        expectObservable(service.createParty('first party')).toBe('(a|)', {
          a: NIL_UUID
        });
        flush();
        expect(storageStub.get).toBeCalledWith('campaigns');
        expect(storageStub.set).toBeCalledWith('campaigns', expectedCampaigns);
      });
    });

    it('should add party with name', () => {
      storageStub.get.mockImplementation(() => of([
        {
          uid: NIL_UUID,
          gloomhaven: {
            prosperity: 0,
            achievements: []
          },
          party: {
            name: 'first party',
            reputation: 0,
            achievements: [],
            currentLocation: {
              name: 'Gloomhaven'
            },
            members: []
          }
        }
      ]));

      const expectedCampaigns = [
        {
          uid: NIL_UUID,
          gloomhaven: {
            prosperity: 0,
            achievements: []
          },
          party: {
            name: 'first party',
            reputation: 0,
            achievements: [],
            currentLocation: {
              name: 'Gloomhaven'
            },
            members: []
          }
        },
        {
          uid: NIL_UUID,
          gloomhaven: {
            prosperity: 0,
            achievements: []
          },
          party: {
            name: 'test party',
            reputation: 0,
            achievements: [],
            currentLocation: {
              name: 'Gloomhaven'
            },
            members: []
          }
      }];

      testScheduler.run(({expectObservable, flush}) => {
        expectObservable(service.createParty('test party')).toBe('(a|)', {
          a: NIL_UUID
        });
        flush();
        expect(storageStub.get).toBeCalledWith('campaigns');
        expect(storageStub.set).toBeCalledWith('campaigns', expectedCampaigns);
      });
    });

  });

  describe('deleteParty', () => {

    it('should return error when higher value', () => {
      storageStub.get.mockImplementation(() => of(undefined));

      testScheduler.run(({expectObservable, flush}) => {
        expectObservable(service.deleteParty('13')).toBe('(a|)', {
          a: 'Unable to remove non existing element'
        });
        flush();
        expect(storageStub.get).toBeCalledWith('campaigns');
        expect(storageStub.set).not.toBeCalled();
      });
    });

    it('should remove campaign', () => {
      storageStub.get.mockImplementation(() => of(
        [
          {
            uid: NIL_UUID,
            gloomhaven: {
              prosperity: 0,
              achievements: []
            },
            party: {
              name: 'first party',
              reputation: 0,
              achievements: [],
              currentLocation: {
                name: 'Gloomhaven'
              },
              members: []
            }
          },
          {
            uid: '13',
            gloomhaven: {
              prosperity: 0,
              achievements: []
            },
            party: {
              name: 'test party',
              reputation: 0,
              achievements: [],
              currentLocation: {
                name: 'Gloomhaven'
              },
              members: []
            }
          }]
      ));

      const expectedCampaigns = [{
        uid: NIL_UUID,
        gloomhaven: {
          prosperity: 0,
          achievements: []
        },
        party: {
          name: 'first party',
          reputation: 0,
          achievements: [],
          currentLocation: {
            name: 'Gloomhaven'
          },
          members: []
        }
      }];

      testScheduler.run(({expectObservable, flush}) => {
        expectObservable(service.deleteParty('13')).toBe('(a|)', {
          a: undefined
        });
        flush();
        expect(storageStub.get).toBeCalledWith('campaigns');
        expect(storageStub.set).toBeCalledWith('campaigns', expectedCampaigns);
      });
    });

  });

});
