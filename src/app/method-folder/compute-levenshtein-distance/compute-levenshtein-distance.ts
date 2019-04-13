export function computeLevenshteinDistance(
  a: string,
  b: string,
): number {
  if (a.length === 0) {
    return b.length;
  }
  if (b.length === 0) {
    return a.length;
  }

  let shorterString: string;
  let longerString: string;
  if (a.length < b.length) {
    [shorterString, longerString] = [a, b];
  } else {
    [shorterString, longerString] = [b, a];
  }

  const longerStringLength = longerString.length;
  const shorterStringLength = shorterString.length;
  let previousDistanceList = new Array<number>(shorterStringLength + 1);
  let currentDistanceList = new Array<number>(shorterStringLength + 1);

  for (let i = 0; i < shorterStringLength; i++) {
    previousDistanceList[i] = i;
  }

  for (let i = 0; i < longerStringLength - 1; i++) {
    currentDistanceList[0] = i + 1;
    for (let j = 0; j < shorterStringLength - 1; j++) {
      const deletionCost = previousDistanceList[j + 1] + 1;
      const insertionCost = currentDistanceList[j] + 1;
      const substitutionCost = longerString[i] === shorterString[j] ? previousDistanceList[j] : previousDistanceList[j] + 1;

      currentDistanceList[j + 1] = Math.min(deletionCost, insertionCost, substitutionCost);
    }
    [previousDistanceList, currentDistanceList] = [currentDistanceList, previousDistanceList];
  }

  return previousDistanceList[shorterStringLength - 1];
}
