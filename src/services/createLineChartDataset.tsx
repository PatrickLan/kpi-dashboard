import React from "react";

export function createDataset ( label: string, data: number[], rgbColor: string) {
    return {
        label: label,
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(184, 185, 210, .3)",
        borderColor: rgbColor,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: rgbColor,
        pointBackgroundColor: rgbColor,
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: rgbColor,
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data
    }
}