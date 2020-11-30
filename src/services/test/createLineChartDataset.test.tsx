import { createDataset } from '../createLineChartDataset';

describe('test createLineChartDataset', () => {

    test('createDataset', () => {
        const dataset = createDataset('auto', [12,17,23,12,11,34,24,56,23,67,33,54], 'rgb(205, 130, 158)')
        expect(dataset).toBeTruthy();
        expect(dataset).toMatchObject({label: 'auto',
          fill: false,
          lineTension: 0.2,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: 'rgb(205, 130, 158)',
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: 'rgb(205, 130, 158)',
          pointBackgroundColor: 'rgb(205, 130, 158)',
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgb(205, 130, 158)',
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [12,17,23,12,11,34,24,56,23,67,33,54] });
      });
});