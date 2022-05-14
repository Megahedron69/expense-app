import React from "react";
import { incomeCategories } from "../List";
import { Doughnut } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
export default function Income() {
  let datas = JSON.parse(localStorage.getItem("transactions"));
  const labelrray = incomeCategories.map((m) => m.category);
  const amountarray = datas
    .filter((q) => q.expensetype === "Income")
    .map((o) => o.number);
  const state = {
    labels: labelrray,
    datasets: [
      {
        label: "Income",
        backgroundColor: [
          "#6c5ce7",
          "#badc58",
          "#e84118",
          "#9aecdb",
          "#7bed9f",
          "#c7ecee",
          "#9980fa",
          "#2bcbba",
          "#fffa65",
        ],
        hoverBackgroundColor: [
          "#7158e2",
          "#e17055",
          "#22a6b3",
          "#5f27cd",
          "#1b1464",
          "#17c0eb",
          "#d2dae2",
          "#ffb142",
          "#82589f",
        ],
        data: amountarray,
      },
    ],
  };
  console.log(state);
  return (
    <div>
      <div className="homehead">
        <h1>INCOME</h1>
      </div>
      <div className="mychart">
        <Doughnut
          data={state}
          options={{
            title: {
              display: false,
              text: "Average Employee Salary According to the Department",
              fontSize: 20,
            },
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: "#ffff",
                  usePointStyle: true,
                  boxHeight: 10,
                  boxWidth: 9,
                  font: "Roboto",
                },
                padding: 35,
                position: "bottom",
                align: "center",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
