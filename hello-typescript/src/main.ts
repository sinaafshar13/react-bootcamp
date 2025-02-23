import { reverseArray } from "./task-2/reverse-array";
import { numbersCounter } from "./task-2/numbers-counter";
import { sortEntities } from "./task-2/sort-entities";

import { Entity } from "./task-2/entities-type";

const items = [1, 4, true, 4, "sina", 6];

const testReverseArray = (items: unknown[]): void => {
  const reversedItems = reverseArray(items);
  console.log(reversedItems);
};
const testNumberCounter = (items: unknown[]): void => {
  const countedNumber: number = numbersCounter(items);
  console.log(countedNumber);
};

const testSortEntities = (): void => {
  const entities: Entity[] = [
    { createdAt: "2025-04-17T00:00:00.000Z" },
    {
      createdAt: "2025-05-10T00:00:00.000Z",
      modifiedAt: "2025-05-17T00:00:00.000Z",
      firstName: "Sina",
    },
    {
      createdAt: "2025-01-10T00:00:00.000Z",
      modifiedAt: "2025-01-11T00:00:00.000Z",
    },
  ];
  const sortedEntities: Entity[] = sortEntities(entities);
  console.log(sortedEntities);
};
const main = (): void => {
  testReverseArray(items);
  testNumberCounter(items);
  testSortEntities();
};
main();
