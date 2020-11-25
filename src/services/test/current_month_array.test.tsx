import {getUpdatedMonthArray} from '../current_month_array';


describe('getUpdatedArray', () => {
test('getUpdatedMonthArray works', () => {
    const arr = getUpdatedMonthArray();
    expect(arr).toBeCalled;
    expect(arr).toStrictEqual(["November", "Dezember",
    "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli","August","September","Oktober"]);
    expect(arr).toHaveLength(12);
    expect(arr).not.toBeNull();
    expect(arr).toContain("Januar" || "Juli");
  });
});
  