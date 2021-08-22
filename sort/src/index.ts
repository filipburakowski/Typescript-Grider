import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([
  10, 3, -5, 0, 500, -550, -1, 8654,
]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('dupaPanieZbita');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-6);
linkedList.add(10);
linkedList.add(9998);
linkedList.add(-668);

linkedList.sort();
linkedList.print();
