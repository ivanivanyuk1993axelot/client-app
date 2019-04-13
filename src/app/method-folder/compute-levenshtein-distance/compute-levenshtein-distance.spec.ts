import {computeLevenshteinDistance} from './compute-levenshtein-distance';
import {TestBed} from '@angular/core/testing';

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('computeLevenshteinDistance', () => {
    expect(computeLevenshteinDistance('sitting', 'kitten')).toBe(3);
    expect(computeLevenshteinDistance('saturday', 'sunday')).toBe(3);
    expect(computeLevenshteinDistance('day', 'a')).toBe(2);
    expect(computeLevenshteinDistance('', '')).toBe(0);
  });
});
