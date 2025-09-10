import { randomUUID } from 'crypto';

export const RandomGenerator = {
  getRandomItemFromArray<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  },

  generateRandomAlphanumeric(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from(
      { length },
      () => characters[Math.floor(Math.random() * characters.length)]
    ).join('');
  },

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return Array.from(
      { length },
      () => characters[Math.floor(Math.random() * characters.length)]
    ).join('');
  },

  generateRandomTenDigitNumber(): string {
    // Generate a random number between 1000000000 and 9999999999
    const min = 1000000000;
    const max = 9999999999;
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
  },

  generateUniqueEmail(): string {
    const uniqueId = randomUUID();
    const domain = 'gmail.com';
    return `vendor.${uniqueId}@${domain}`;
  },
};
