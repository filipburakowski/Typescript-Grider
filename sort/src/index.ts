import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([
  10, 3, -5, 0, 500, -550, -1, 8654,
]);
const sorter = new Sorter(numbersCollection);

sorter.sort();
console.log(numbersCollection.data);
