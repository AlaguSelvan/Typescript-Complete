import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10000, 3, -5]);
const charactersCollection = new CharactersCollection('Xaayb');
const linkedListCollection = new LinkedList();
linkedListCollection.add(500)
linkedListCollection.add(-10)
linkedListCollection.add(-3)
linkedListCollection.add(4)
numbersCollection.sort()
charactersCollection.sort()
linkedListCollection.sort()
// const sorter = new Sorter(numbersCollection);
// const charssorter = new Sorter(charactersCollection);
// const linkedListssorter = new Sorter(linkedListCollection);
// sorter.sort();
// charssorter.sort();
// linkedListssorter.sort();
// console.log(numbersCollection.data)
// console.log(charactersCollection.data)
// console.log(linkedListCollection.print())
console.log(numbersCollection.data)
console.log(charactersCollection.data)
console.log(linkedListCollection.print())