import React from "react";
import { mdiCurrencyUsd, mdiCurrencyUsdOff } from "@mdi/js";
import Icon from "@mdi/react";
import "../scss/appnavbar.scss";

export default function History() {
  let datas = JSON.parse(localStorage.getItem("transactions"));

  return (
    <div>
      <div className="homehead hishead">
        <h1>HISTORY</h1>
      </div>
      <div className="hiscard">
        {datas.map((data) => {
          return (
            <div className="indihiscard">
              <div className="iconcard">
                <Icon
                  color={data.expensetype === "Expense" ? "red" : "green"}
                  className="con"
                  path={
                    data.expensetype === "Expense"
                      ? mdiCurrencyUsdOff
                      : mdiCurrencyUsd
                  }
                  size={1.5}
                />
              </div>
              <div className="statementcard">
                <h3>{data.category}</h3>
                <p
                  style={{
                    color: data.expensetype === "Expense" ? "red" : "green",
                  }}
                >
                  {data.expensetype === "Expense" ? "-" : "+"} $ {data.number}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
