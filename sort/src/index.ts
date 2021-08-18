import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([
  10, 3, -5, 0, 500, -550, -1, 8654,
]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('dupaPanieZbita');
const charactersSorter = new Sorter(charactersCollection);
charactersSorter.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-6);
linkedList.add(10);
linkedList.add(9998);
linkedList.add(-668);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
