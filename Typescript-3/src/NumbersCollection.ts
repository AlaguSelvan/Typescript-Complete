import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) { 
    super( )
   }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  };

  get length(): number {
    return this.data.length;
  };

  swap(leftIdx: number, rightIdx: number): void {
    [this.data[leftIdx], this.data[rightIdx]] = [this.data[rightIdx], this.data[leftIdx]];
  }
}