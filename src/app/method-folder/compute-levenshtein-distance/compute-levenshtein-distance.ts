export function computeLevenshteinDistance(leftString: string, rightString: string): number {
  let shorterString: string;
  let longerString: string;
  if (leftString.length < rightString.length) {
    shorterString = leftString;
    longerString = rightString;
  } else {
    shorterString = rightString;
    longerString = leftString;
  }

  if (shorterString.length === 0) {
    return longerString.length;
  }

  const matrix = [];

  // increment along the first column of each row
  let longerStringIndex;
  for (longerStringIndex = 0; longerStringIndex <= longerString.length; longerStringIndex++) {
    matrix[longerStringIndex] = [longerStringIndex];
  }

  // increment each column in the first row
  let shorterStringIndex;
  for (shorterStringIndex = 0; shorterStringIndex <= shorterString.length; shorterStringIndex++) {
    matrix[0][shorterStringIndex] = shorterStringIndex;
  }

  // Fill in the rest of the matrix
  let costList;
  let newCostList;
  for (longerStringIndex = 1; longerStringIndex <= longerString.length; longerStringIndex++) {
    for (shorterStringIndex = 1; shorterStringIndex <= shorterString.length; shorterStringIndex++) {
      costList = matrix[longerStringIndex - 1];
      newCostList = matrix[longerStringIndex];
      if (longerString[longerStringIndex - 1] === shorterString[shorterStringIndex - 1]) {
        newCostList[shorterStringIndex] = costList[shorterStringIndex - 1];
      } else {
        newCostList[shorterStringIndex] = Math.min(
          costList[shorterStringIndex - 1] + 1, // substitution
          costList[shorterStringIndex] + 1, // deletion
          newCostList[shorterStringIndex - 1] + 1, // insertion
        );
      }
    }
  }

  return newCostList[shorterString.length];
}
