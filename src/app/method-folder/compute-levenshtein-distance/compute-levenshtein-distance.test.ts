import {computeLevenshteinDistance} from './compute-levenshtein-distance';

export function computeLevenshteinDistance_test() {
  let isOk = true;

  for (const testCase of [
    ['sitting', 'kitten', 3] as any,
    ['saturday', 'sunday', 3],
    ['day', 'a', 2],
  ]) {
    if (computeLevenshteinDistance(testCase[0], testCase[1]) !== testCase[2]) {
      isOk = false;
      console.log(computeLevenshteinDistance(testCase[0], testCase[1]));
      console.log(testCase);
    }
  }

  console.log(`computeLevenshteinDistance: ${isOk}`);
}
