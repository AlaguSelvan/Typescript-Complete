interface Sortable {
  length: number;
  compare(leftIdx: number, rightIdx: number): boolean;
  swap(leftIdx: number, rightIdx: number): void;
}

export abstract class Sorter {
  abstract compare(leftIdx: number, rightIdx: number): boolean;
  abstract swap(leftIdx: number, rightIdx: number): void;
  abstract length: number;
  // constructor(public collection: Sortable) {
  //   this.collection = collection;
  // }

  sort(): void {
    const { length } = this;
    let noSwaps: Boolean
    for (let i = 0; i < length; i++) {
      noSwaps = false;
      if (!noSwaps) {
        for (let j = 0; j < length - 1; j++) {
          if (this.compare(j, j+1)) {
            noSwaps = true;
            this.swap(j, j + 1);
          }
        }
      }
    }
  }
}
