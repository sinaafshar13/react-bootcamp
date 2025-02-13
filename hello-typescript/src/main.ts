import { reverseArray } from "./task-2/reverse-array";
import { numbersCounter } from "./task-2/numbers-counter";

const items = [1, 4, true, 4, "sina", 6];

const reversedItems = reverseArray(items);

console.log(reversedItems);

const countedNumber: number = numbersCounter(items);

console.log(countedNumber);
