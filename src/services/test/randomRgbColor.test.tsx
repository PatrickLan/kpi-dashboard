import {randomRgbColor} from '../randomRgbColor';

describe('test randomRgbColor', () => {
test('randomRgbColor', () => {
    const color = randomRgbColor();
    expect(color).toBeTruthy();
    expect(color).toContain("rgb")
  });
});