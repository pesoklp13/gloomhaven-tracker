export interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
  remove(): void;
}

export interface Iterable<T> {
  iterator(): Iterator<T>;
}
