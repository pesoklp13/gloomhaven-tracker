import {PartyStorageService} from './party-storage.service';
import {of} from 'rxjs';
import {TestScheduler} from 'rxjs/testing';

describe('PartyStorageService', () => {
  let service: PartyStorageService;
  let storageStub: any;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    storageStub = {
      get: jest.fn(),
      set: jest.fn()
    };

    storageStub.set.mockImplementation(() => of(undefined));

    service = new PartyStorageService(storageStub);
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('createParty', () => {

    it('should create first party with name', () => {
      storageStub.get.mockImplementation(() => of(undefined));

      const expectedCampaigns = [{
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
          a: undefined
        });
        flush();
        expect(storageStub.get).toBeCalledWith('campaigns', expect.anything());
        expect(storageStub.set).toBeCalledWith('campaigns', expectedCampaigns);
      });
    });

    it('should add party with name', () => {
      storageStub.get.mockImplementation(() => of([
        {
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
          a: undefined
        });
        flush();
        expect(storageStub.get).toBeCalledWith('campaigns', expect.anything());
        expect(storageStub.set).toBeCalledWith('campaigns', expectedCampaigns);
      });
    });

  });

  describe('deleteParty', () => {

    it('should return error when negative value', () => {
      storageStub.get.mockImplementation(() => of(undefined));

      testScheduler.run(({expectObservable, flush}) => {
        expectObservable(service.deleteParty(-1)).toBe('(a|)', {
          a: 'Unable to remove non existing element. Negative value'
        });
        flush();
        expect(storageStub.get).not.toBeCalled();
        expect(storageStub.set).not.toBeCalled();
      });
    });

    it('should return error when higher value', () => {
      storageStub.get.mockImplementation(() => of(undefined));

      testScheduler.run(({expectObservable, flush}) => {
        expectObservable(service.deleteParty(3)).toBe('(a|)', {
          a: 'Unable to remove non existing element. Index out of bounds'
        });
        flush();
        expect(storageStub.get).toBeCalledWith('campaigns', expect.anything());
        expect(storageStub.set).not.toBeCalled();
      });
    });

    it('should remove campaign', () => {
      storageStub.get.mockImplementation(() => of(
        [
          {
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
        expectObservable(service.deleteParty(1)).toBe('(a|)', {
          a: undefined
        });
        flush();
        expect(storageStub.get).toBeCalledWith('campaigns', expect.anything());
        expect(storageStub.set).toBeCalledWith('campaigns', expectedCampaigns);
      });
    });

  });

});
