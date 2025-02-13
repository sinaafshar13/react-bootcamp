export function numbersCounter(items: unknown[]): number {
  let counter: number = 0;
  for (const item of items) {
    if (typeof item === "number") {
      counter++;
    }
  }
  return counter;
}
