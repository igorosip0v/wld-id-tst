/**
 * Generates a random integer between a specified range
 * @param min Minimum number in range (inclusive)
 * @param max Maximum number in range (inclusive)
 * @returns Number between range
 */
export const randomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
