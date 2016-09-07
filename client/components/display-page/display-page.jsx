import React from 'react';

const COST_PER_MILE = 0.50;
const DAYS_PER_MONTH = 20;
const MONTH_TO_TEN_YEAR_FACTOR = 173;

function DisplayPage(props) {
  const {monthlyCost, tenYearCost} = calculateCosts(props.userData);

  return (
    <div className='page-content'>
      <h1>Your results</h1>
      <p>
        Each month, your commute costs ${monthlyCost}.
      </p>

      <p>
        Afer 10 years, your commute will cost you ${tenYearCost}.
      </p>
    </div>
  );
}


function calculateCosts(userData) {
  const {commuteTime, commuteDistance, hourlyPay} = userData;

  const commuteTimeCostPerDay = hourlyPay * commuteTime;
  const commuteDistanceCostPerDay = commuteDistance * COST_PER_MILE;

  const monthlyCost = DAYS_PER_MONTH * (commuteTimeCostPerDay + commuteDistanceCostPerDay);
  const tenYearCost = monthlyCost * MONTH_TO_TEN_YEAR_FACTOR;

  return {monthlyCost, tenYearCost};
}

module.exports = DisplayPage;
