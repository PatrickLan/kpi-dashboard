import {getUpdatedMonthArray} from '../current_month_array';


describe('getUpdatedArray', () => {
test('getUpdatedMonthArray works', async () => {
    const arr = await getUpdatedMonthArray();
    expect(arr).toBeCalled;
    expect(arr).toContain("November" && "Dezember" &&
    "Januar" && "Februar" && "März" && "April" && "Mai" && "Juni" && "Juli" && "August" && "September" &&"Oktober");
    expect(arr).toHaveLength(12);
  });
});
  