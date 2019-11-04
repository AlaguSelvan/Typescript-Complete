class Sorter {

  constructor(public collection: number[] | string) {
    this.collection = collection;
  }

  private swap(arr:number[], i: number, j: number): void {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  public bubbleSort(): void {
    const { length } = this.collection;
    
    let noSwaps: Boolean
    for(let i = 0; i < length; i++) {
      noSwaps = false
      if(!noSwaps) {
      for( let j = 0; j < length - 1; j++) {
        // Bad Code
        // Type Guards
        if(this.collection instanceof Array) {
          if(this.collection[j] > this.collection[j + 1]) {
              noSwaps = true
              this.swap(this.collection, j, j + 1);
            }
        }
        if(typeof this.collection === 'string') {
          // this.collection
        }
        }
      }
    }
  }
}


const sorter = new Sorter([10, 3, -5, 1, -9, 22, 0]);
sorter.bubbleSort();
console.log(sorter.collection);