import { LinkedList } from "@gloomhaven-tracker/common-library";

describe('LinkedList', () => {

  let list: LinkedList<number>;

  const createListWithValues = () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
  }

  beforeEach(() => {
    list = new LinkedList();
  });

  describe('append', () => {

    it('should add new element to end of the list', () => {
      list.append(1);

      expect(list.peek()).toBe(1);

      list.append(2);

      expect(list.peek()).toBe(2);

      list.append(3);

      expect(list.peek()).toBe(3);
      expect(list.peekFromStart()).toBe(1);
    });

  });

  describe('prepend', () => {

    it('should add new element to start of the list', () => {
      list.prepend(3);

      expect(list.peekFromStart()).toBe(3);

      list.prepend(2);

      expect(list.peekFromStart()).toBe(2);

      list.prepend(1);

      expect(list.peekFromStart()).toBe(1);
      expect(list.peek()).toBe(3);
    });

  });

  describe('peek', () => {

    it('should return undefined for empty list', () => {
      expect(list.peek()).toBeUndefined();
    });

  });

  describe('peekFromStart', () => {

    it('should return undefined for empty list', () => {
      expect(list.peekFromStart()).toBeUndefined();
    });

    it('should return same value as peek for list with one element', () => {
      list.append(1);

      expect(list.peek()).toBe(1);
      expect(list.peekFromStart()).toBe(1);
    });

  });

  describe('remove', () => {

    it('should return undefined when empty list', () => {
      expect(list.remove()).toBeUndefined();
    });

    it('should remove elements from end of the list', () => {
      createListWithValues();

      expect(list.remove()).toBe(4);
      expect(list.remove()).toBe(3);
      expect(list.remove()).toBe(2);
      expect(list.remove()).toBe(1);
      expect(list.remove()).toBeUndefined();
    });

  });

  describe('removeFromStart', () => {

    it('should return undefined when empty list', () => {
      expect(list.removeFromStart()).toBeUndefined();
    });

    it('should remove elements from start of the list', () => {
      createListWithValues();

      expect(list.removeFromStart()).toBe(1);
      expect(list.removeFromStart()).toBe(2);
      expect(list.removeFromStart()).toBe(3);
      expect(list.removeFromStart()).toBe(4);
      expect(list.removeFromStart()).toBeUndefined();
    });

  });

  describe('LinkedListIterator', () => {

    describe('hasNext', () => {

      it('should return false when empty list', () => {
        expect(list.iterator().hasNext()).toBeFalsy();
      });

      it('should return true when list not empty', () => {
        list.append(1);

        expect(list.iterator().hasNext()).toBeTruthy();
      });

    });

    describe('next', () => {

      it('should return undefined when empty list', () => {
        expect(list.iterator().next()).toBeUndefined();
      });

      it('should return 1', () => {
        list.append(1);

        const iterator = list.iterator();

        expect(iterator.next()).toBe(1);
        expect(iterator.next()).toBeUndefined();
      });

      it('should return 1, 2, 3', () => {
        list.append(1);
        list.append(2);
        list.append(3);

        const iterator = list.iterator();

        expect(iterator.next()).toBe(1);
        expect(iterator.next()).toBe(2);
        expect(iterator.next()).toBe(3);
        expect(iterator.next()).toBeUndefined();
      })

    });

    describe('remove', () => {

      it('should throw an error when empty list', () => {
        expect(() => {
          list.iterator().remove();
        }).toThrowError('Unable to remove non existing node or already removed one!');
      });

      it('should throw an error when called twice for the same node', () => {
        list.append(1);
        list.append(2);

        expect(() => {
          const iterator = list.iterator();

          iterator.next();
          iterator.remove();
          iterator.remove();
        }).toThrowError('Unable to remove non existing node or already removed one!');
      });

      it('should remove first element', () => {
        createListWithValues();

        expect(list.size).toBe(4);

        let iterator = list.iterator();

        iterator.next();
        iterator.remove();

        expect(list.size).toBe(3);

        iterator = list.iterator();
        expect(iterator.next()).toBe(2);
        expect(iterator.next()).toBe(3);
        expect(iterator.next()).toBe(4);
        expect(iterator.next()).toBeUndefined();
      });

      it('should remove last element', () => {
        createListWithValues();

        expect(list.size).toBe(4);

        let iterator = list.iterator();

        iterator.next();
        iterator.next();
        iterator.next();
        iterator.next();
        iterator.remove();

        expect(list.size).toBe(3);

        iterator = list.iterator();
        expect(iterator.next()).toBe(1);
        expect(iterator.next()).toBe(2);
        expect(iterator.next()).toBe(3);
        expect(iterator.next()).toBeUndefined();
      });

      it('should remove element in the middle', () => {
        createListWithValues();

        expect(list.size).toBe(4);

        let iterator = list.iterator();

        iterator.next();
        iterator.next();
        iterator.remove();
        iterator.next();
        iterator.remove();
        iterator.next();

        expect(list.size).toBe(2);

        iterator = list.iterator();
        expect(iterator.next()).toBe(1);
        expect(iterator.next()).toBe(4);
        expect(iterator.next()).toBeUndefined();
      });

    });

  });

});
