import React from 'react';
import LineChart from './LineChart.jsx';
import axios from 'axios';
import './playerData.css';

const PlayerData = (props) => {

  const totalStats = {
    AB: 0,
    BB: 0,
    H: 0,
    HBP: 0,
    HR: 0,
    K: 0,
    PA: 0,
    RBI: 0,
    SF: 0,
    TB: 0
  };

  const months = {
    March: {
      AB: 0,
      BB: 0,
      H: 0,
      HBP: 0,
      HR: 0,
      K: 0,
      PA: 0,
      RBI: 0,
      SF: 0,
      TB: 0
    },
    April: {
      AB: 0,
      BB: 0,
      H: 0,
      HBP: 0,
      HR: 0,
      K: 0,
      PA: 0,
      RBI: 0,
      SF: 0,
      TB: 0
    },
    May: {
      AB: 0,
      BB: 0,
      H: 0,
      HBP: 0,
      HR: 0,
      K: 0,
      PA: 0,
      RBI: 0,
      SF: 0,
      TB: 0
    },
    June: {
      AB: 0,
      BB: 0,
      H: 0,
      HBP: 0,
      HR: 0,
      K: 0,
      PA: 0,
      RBI: 0,
      SF: 0,
      TB: 0
    },
    July: {
      AB: 0,
      BB: 0,
      H: 0,
      HBP: 0,
      HR: 0,
      K: 0,
      PA: 0,
      RBI: 0,
      SF: 0,
      TB: 0
    },
    August: {
      AB: 0,
      BB: 0,
      H: 0,
      HBP: 0,
      HR: 0,
      K: 0,
      PA: 0,
      RBI: 0,
      SF: 0,
      TB: 0
    },
    September: {
      AB: 0,
      BB: 0,
      H: 0,
      HBP: 0,
      HR: 0,
      K: 0,
      PA: 0,
      RBI: 0,
      SF: 0,
      TB: 0
    },
  }

  const obpPerMonth = []

  for (let i = 0; i < props.data.length; i++) {
    totalStats.AB += props.data[i].AB;
    totalStats.BB += props.data[i].BB;
    totalStats.H += props.data[i].H;
    totalStats.HBP += props.data[i].HBP;
    totalStats.HR += props.data[i].HR;
    totalStats.K += props.data[i].K;
    totalStats.PA += props.data[i].PA;
    totalStats.RBI += props.data[i].RBI;
    totalStats.SF += props.data[i].SF;
    totalStats.TB += props.data[i].TB;

    const month = props.data[i].gameDate.split('-')[1];

    if (month === '03') {
      months.March.AB += props.data[i].AB;
      months.March.BB += props.data[i].BB;
      months.March.H += props.data[i].H;
      months.March.HBP += props.data[i].HBP;
      months.March.HR += props.data[i].HR;
      months.March.K += props.data[i].K;
      months.March.PA += props.data[i].PA;
      months.March.RBI += props.data[i].RBI;
      months.March.SF += props.data[i].SF;
      months.March.TB += props.data[i].TB;
    } else if (month === '04') {
      months.April.AB += props.data[i].AB;
      months.April.BB += props.data[i].BB;
      months.April.H += props.data[i].H;
      months.April.HBP += props.data[i].HBP;
      months.April.HR += props.data[i].HR;
      months.April.K += props.data[i].K;
      months.April.PA += props.data[i].PA;
      months.April.RBI += props.data[i].RBI;
      months.April.SF += props.data[i].SF;
      months.April.TB += props.data[i].TB;
    } else if (month === '05') {
      months.May.AB += props.data[i].AB;
      months.May.BB += props.data[i].BB;
      months.May.H += props.data[i].H;
      months.May.HBP += props.data[i].HBP;
      months.May.HR += props.data[i].HR;
      months.May.K += props.data[i].K;
      months.May.PA += props.data[i].PA;
      months.May.RBI += props.data[i].RBI;
      months.May.SF += props.data[i].SF;
      months.May.TB += props.data[i].TB;
    } else if (month === '06') {
      months.June.AB += props.data[i].AB;
      months.June.BB += props.data[i].BB;
      months.June.H += props.data[i].H;
      months.June.HBP += props.data[i].HBP;
      months.June.HR += props.data[i].HR;
      months.June.K += props.data[i].K;
      months.June.PA += props.data[i].PA;
      months.June.RBI += props.data[i].RBI;
      months.June.SF += props.data[i].SF;
      months.June.TB += props.data[i].TB;
    } else if (month === '07') {
      months.July.AB += props.data[i].AB;
      months.July.BB += props.data[i].BB;
      months.July.H += props.data[i].H;
      months.July.HBP += props.data[i].HBP;
      months.July.HR += props.data[i].HR;
      months.July.K += props.data[i].K;
      months.July.PA += props.data[i].PA;
      months.July.RBI += props.data[i].RBI;
      months.July.SF += props.data[i].SF;
      months.July.TB += props.data[i].TB;
    } else if (month === '08') {
      months.August.AB += props.data[i].AB;
      months.August.BB += props.data[i].BB;
      months.August.H += props.data[i].H;
      months.August.HBP += props.data[i].HBP;
      months.August.HR += props.data[i].HR;
      months.August.K += props.data[i].K;
      months.August.PA += props.data[i].PA;
      months.August.RBI += props.data[i].RBI;
      months.August.SF += props.data[i].SF;
      months.August.TB += props.data[i].TB;
    } else if (month === '09') {
      months.September.AB += props.data[i].AB;
      months.September.BB += props.data[i].BB;
      months.September.H += props.data[i].H;
      months.September.HBP += props.data[i].HBP;
      months.September.HR += props.data[i].HR;
      months.September.K += props.data[i].K;
      months.September.PA += props.data[i].PA;
      months.September.RBI += props.data[i].RBI;
      months.September.SF += props.data[i].SF;
      months.September.TB += props.data[i].TB;
    }
  }

  const totalObp = (totalStats.H + totalStats.BB + totalStats.HBP) / (totalStats.AB + totalStats.BB + totalStats.SF + totalStats.HBP);

  const totalSlg = totalStats.TB / totalStats.AB;

  const totalOps = totalObp + totalSlg;

  const monthlyOps = [];

  for (let key in months) {
    const monthlyObp = (months[key].H + months[key].BB + months[key].HBP) / (months[key].AB + months[key].BB + months[key].SF + months[key].HBP);

    const monthlySlg = months[key].TB / months[key].AB;

    const num = monthlyObp + monthlySlg;
    const totalMonthlyOps = parseFloat(num.toFixed(3));
    console.log('NUMER=', totalMonthlyOps)
    monthlyOps.push(totalMonthlyOps);
  }

  return (
    <div className="mainEachPlayer">
      <h1>Player Data</h1>
      <div className="totalStatsChart">
        <div className="stats-item">
          <p className="label">AB</p>
          <div className="stat">
            {totalStats.AB}
          </div>
        </div>

        <div className="stats-item">
          <p className="label">BB</p>
          <div className="stat">
          {totalStats.BB}
          </div>
        </div>

        <div className="stats-item">
          <p className="label">H</p>
          <div className="stat">
          {totalStats.H}
          </div>
        </div>

        <div className="stats-item">
          <p className="label">HBP</p>
          <div className="stat">
          {totalStats.HBP}
          </div>
        </div>

        <div className="stats-item">
          <p className="label">HR</p>
          <div className="stat">
          {totalStats.HR}
          </div>
        </div>

        <div className="stats-item">
          <p className="label">K</p>
          <div className="stat">
          {totalStats.K}
          </div>
        </div>

        <div className="stats-item">
          <p className="label">PA</p>
          <div className="stat">
          {totalStats.PA}
          </div>
        </div>

        <div className="stats-item">
          <p className="label">RBI</p>
          <div className="stat">
          {totalStats.RBI}
          </div>
        </div>

        <div className="stats-item">
          <p className="label">SF</p>
          <div className="stat">
          {totalStats.SF}
          </div>
        </div>

        <div className="stats-item">
          <p className="label">TB</p>
          <div className="stat">
          {totalStats.TB}
          </div>
        </div>

      </div>
      <LineChart ops={monthlyOps} />

    </div>
  )
}

export default PlayerData;