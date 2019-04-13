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
  for (longerStringIndex = 1; longerStringIndex <= longerString.length; longerStringIndex++) {
    for (shorterStringIndex = 1; shorterStringIndex <= shorterString.length; shorterStringIndex++) {
      if (longerString.charAt(longerStringIndex - 1) === shorterString.charAt(shorterStringIndex - 1)) {
        matrix[longerStringIndex][shorterStringIndex] = matrix[longerStringIndex - 1][shorterStringIndex - 1];
      } else {
        matrix[longerStringIndex][shorterStringIndex] = Math.min(matrix[longerStringIndex - 1][shorterStringIndex - 1] + 1, // substitution
          Math.min(matrix[longerStringIndex][shorterStringIndex - 1] + 1, // insertion
            matrix[longerStringIndex - 1][shorterStringIndex] + 1)); // deletion
      }
    }
  }

  return matrix[longerString.length][shorterString.length];
}
