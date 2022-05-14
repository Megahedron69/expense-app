import React from "react";

import "../scss/appnavbar.scss";
import { useSpeechContext } from "@speechly/react-client";
import formdate from "../../utils/formdate";
import {
  PushToTalkButtonContainer,
  PushToTalkButton,
  ErrorPanel,
} from "@speechly/react-ui";
export default function Home() {
  const initialstate = {
    expensetype: "",
    category: "",
    number: "",
    date: formdate(new Date()),
  };
  const [formdata, setformdata] = React.useState({ initialstate });
  const { segment } = useSpeechContext();
  function handlechange(event) {
    const { name, value } = event.target;
    setformdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function appendValueToStorage(key, value) {
    var values = JSON.parse(localStorage.getItem(key));
    if (values === null) {
      values = [];
    }
    values.push(value);
    localStorage.setItem(key, JSON.stringify(values));
  }
  function handledata() {
    appendValueToStorage("transactions", formdata);
  }
  function handlesubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <div className="homehead">
        <h1>HOME</h1>
      </div>
      <form onSubmit={handlesubmit}>
        <div className="statement">
          <div id="flavoursContainer" className="speech">
            <p>
              {segment ? (
                <>{segment.words.map((w) => w.value).join(" ")}</>
              ) : null}
            </p>
          </div>
        </div>
        <div className="farm Expense ">
          <label htmlFor="expense">Type: </label>
          <select
            className="expensetype"
            name="expensetype"
            onChange={handlechange}
            value={formdata.expensetype}
          >
            <option selected value="Income">
              Income
            </option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <div className="farm Category">
          <label htmlFor="category">Category: </label>

          {formdata.expensetype === "Income" ? (
            <select
              className="categorytype"
              id="category"
              name="category"
              onChange={handlechange}
              value={formdata.category}
            >
              <option value="Buisness">Buisness</option>
              <option value="Investments">Investments</option>
              <option value="Extra Income">Extra Income</option>
              <option value="Deposits">Deposits</option>
              <option value="Lottery">Lottery</option>
              <option value="Gifts">Gifts</option>
              <option selected value="Salary">
                Salary
              </option>
              <option value="Savings">Savings</option>
              <option value="Rental Income">Rental Income</option>
            </select>
          ) : (
            <select
              className="categorytype"
              id="category"
              name="category"
              onChange={handlechange}
              value={formdata.category}
            >
              <option value="Bills">Bills</option>
              <option value="Car">Car</option>
              <option value="Clothes">Clothes</option>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
              <option value="Shopping">Shopping</option>
              <option value="House">House</option>
              <option value="Entertaintment">Entertaintment</option>
              <option value="others">others</option>
            </select>
          )}
        </div>
        <div className="farm Number">
          <input
            type="number"
            placeholder="Amount"
            name="number"
            onChange={handlechange}
            value={formdata.number}
          />
        </div>
        <div className="farm Date">
          <label htmlFor="date">Date:</label>
          <input
            name="date"
            onChange={handlechange}
            value={formdata.date}
            type="date"
          />
        </div>
        <div className="farm">
          <button onClick={handledata}>CREATE</button>
        </div>
        <PushToTalkButtonContainer>
          <PushToTalkButton
            size="60px"
            placement="bottom"
            backgroundColor="#2d3239"
            gradientStops={["#2d3239", "#30363d"]}
          />
          <ErrorPanel />
        </PushToTalkButtonContainer>
      </form>
    </div>
  );
}
