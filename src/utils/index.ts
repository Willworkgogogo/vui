export function isLeepYear(year: number): boolean {
  year = year || new Date().getFullYear();
  const condition1 = year % 4 === 0 && year % 100 !== 0;
  const condition2 = year % 400 === 0;
  return condition1 || condition2;
}

export function fillZero(n: number, count: number = 1) {
  if (n < 10) return `${new Array(count).fill(0)}${n}`;
  return n;
}
