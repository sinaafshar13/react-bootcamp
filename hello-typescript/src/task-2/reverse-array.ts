export function reverseArray(items: unknown[]): unknown[] {
  const result: unknown[] = [];

  for (let i = items.length - 1; i >= 0; i--) {
    result.push(items[i]);
  }
  return result;
}
