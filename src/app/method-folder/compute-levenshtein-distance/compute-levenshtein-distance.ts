export function computeLevenshteinDistance(
  a: string,
  b: string,
): number {
  const aLen = a.length;
  const bLen = b.length;
  let previousDistanceList = new Array<number>(bLen + 1);
  let currentDistanceList = new Array<number>(bLen + 1);

  for (let i = 0; i < bLen; i++) {
    previousDistanceList[i] = i;
  }

  for (let i = 0; i < aLen - 1; i++) {
    currentDistanceList[0] = i + 1;
    for (let j = 0; j < bLen - 1; j++) {
      const deletionCost = previousDistanceList[j + 1] + 1;
      const insertionCost = currentDistanceList[j] + 1;
      const substitutionCost = a[i] === b[j] ? previousDistanceList[j] : previousDistanceList[j] + 1;

      currentDistanceList[j + 1] = Math.min(deletionCost, insertionCost, substitutionCost);
    }
    [previousDistanceList, currentDistanceList] = [currentDistanceList, previousDistanceList];
  }

  return previousDistanceList[bLen - 1];
}
