import React from 'react';

const COST_PER_MILE = 0.50;
const DAYS_PER_MONTH = 30;
const MONTH_TO_TEN_YEAR_FACTOR = 173;

function DisplayPage() {
  const {monthlyCost, tenYearCost} = calculateCosts();

  return (
    <div className='display-page'>
      <p>
        Each month, your commute costs ${monthlyCost}.
      </p>

      <p>
        Afer 10 years, your commute will cost you ${tenYearCost}.
      </p>
    </div>
  );
}

function calculateCosts() {
  const commuteTime = localStorage.getItem('commuteTime');
  const commuteDistance = localStorage.getItem('commuteDistance');
  const hourlyPay = localStorage.getItem('hourlyPay');

  const commuteTimeCostPerDay = hourlyPay * commuteTime;
  const commuteDistanceCostPerDay = commuteDistance * COST_PER_MILE;

  const monthlyCost = DAYS_PER_MONTH * (commuteTimeCostPerDay + commuteDistanceCostPerDay);
  const tenYearCost = monthlyCost * MONTH_TO_TEN_YEAR_FACTOR;

  return {monthlyCost, tenYearCost};
}

module.exports = DisplayPage;
