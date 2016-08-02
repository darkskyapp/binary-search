//Typescript type definition for:
//https://github.com/darkskyapp/binary-search
declare module 'binary-search' {

const enum compareResult {
  lessThan = -1,
  greaterThan = 1,
  same = 0
}

function binarySearch<A>(
  haystack: A[],
  needle: A,
  comparator: (a: A, b: A, index?: number, haystack?: A[]) => compareResult,
  low?: number,
  high?: number): number; //returns index of found result or number < 0 if not found
export = binarySearch;
}
