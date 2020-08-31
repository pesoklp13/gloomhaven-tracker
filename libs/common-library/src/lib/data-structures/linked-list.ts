import {Iterable, Iterator} from "./iterator";

interface ListNode<T> {
  value: T;
  previous?: ListNode<T>;
  next?: ListNode<T>;
}

class LinkedListIterator<T> implements Iterator<T> {

  private previous: ListNode<T> | undefined;

  constructor(private current: ListNode<T>, private onRemove: (isHead: boolean) => void) {}

  hasNext(): boolean {
    return !!this.current;
  }

  next(): T {
    this.previous = this.current;
    this.current = this.current?.next;

    return this.previous?.value;
  }

  remove(): void {
    if (!this.previous) {
      throw new Error('Unable to remove non existing node or already removed one!');
    }

    const nodeToDelete = this.previous;

    const isHead = nodeToDelete.previous === undefined;

    if(nodeToDelete.previous) {
      nodeToDelete.previous.next = nodeToDelete.next;
    }

    if(nodeToDelete.next) {
      nodeToDelete.next.previous = nodeToDelete.previous;
    }

    this.previous = undefined;
    this.onRemove(isHead);
  }

}

export class LinkedList<T> implements Iterable<T>{

  public get size(): number {
    return this._size;
  }

  private head?: ListNode<T>;
  private tail?: ListNode<T>;
  private _size: number = 0;

  public append(value: T): void {
    if(!this.head) {
      this.addFirstElement(value);

      return;
    }

    let appendedNode = {
      value,
      previous: this.tail
    }

    this.tail.next = appendedNode;
    this.tail = appendedNode;
    this._size++;
  }

  public prepend(value: T): void {
    if(!this.head) {
      this.addFirstElement(value);

      return;
    }

    let prependedNode = {
      value,
      next: this.head
    }

    this.head.previous = prependedNode;
    this.head = prependedNode;
    this._size++;
  }

  public peek(): T | undefined {
    return this.tail?.value;
  }

  public peekFromStart(): T | undefined {
    return this.head?.value;
  }

  public remove(): T | undefined {
    const removedNode = this.tail;

    if(this._size <= 1) {
      this.removeLastElement();

      return removedNode?.value;
    }

    this.tail = this.tail.previous;
    this.tail.next = undefined;
    this._size--;

    if(this._size === 1) {
      this.tail = this.head;
    }

    return removedNode.value;
  }

  public removeFromStart(): T | undefined {
    const removedNode = this.head;

    if(this._size <= 1) {
      this.removeLastElement();

      return removedNode?.value;
    }

    this.head = this.head.next;
    this.head.previous = undefined;
    this._size--;

    if(this._size === 1) {
      this.tail = this.head;
    }

    return removedNode.value;
  }

  iterator(): Iterator<T> {
    return new LinkedListIterator(this.head, this.onRemove.bind(this));
  }

  public toString(): string {
    const iterator = this.iterator();
    let result = 'LinkedList -> ';

    result += iterator.next();

    while(iterator.hasNext()) {
      result += ` -> ${iterator.next()}`;
    }

    return result;
  }

  private addFirstElement(value: T): void {
    this.head = {
      value
    }

    this.tail = this.head;
    this._size++;

    return;
  }

  private removeLastElement(): void {
    this.head = this.tail = undefined;
    this._size = 0;
  }

  private onRemove(isHead: true): void {
    this._size--;

    if(isHead) {
      this.head = this.head.next;
    }
  }

}
