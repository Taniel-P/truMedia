import React, { useState, useEffect } from 'react';
import EachGame from './EachGame.jsx';

const GameStats = (props) => {
  const statsArray = props.data.map((e) => {
    const totalObp = (e.H + e.BB + e.HBP) / (e.AB + e.BB + e.SF + e.HBP);
    const totalSlg = e.TB / e.AB;
    const totalOpsNum = totalObp + totalSlg;
    const totalOps = parseFloat(totalOpsNum.toFixed(3)) || 0;
    const totalAvgNum = e.H / e.AB;
    const totalAvg = parseFloat(totalAvgNum.toFixed(3)) || 0;
    e.OPS = totalOps;
    e.AVG = totalAvg;
    return e;
  })

  return (
    <div className="gameStats">
      <table className="statsTable">
        <thead>
          <tr className="tr">
            <th className="sortable col-0" data-index="0">
              <span>Date</span>
              <span className="sort">
                <i className="sortIcon"></i>
              </span>
            </th>
            <th className="sortable col-1" data-index="1">
              <span>Team</span>
              <span className="sort">
                <i className="sortIcon"></i>
              </span>
            </th>
            <th className="sortable col-2" data-index="2">
              <span>Opp</span>
              <span className="sort">
                <i className="sortIcon"></i>
              </span>
            </th>
            <th className="sortable col-3" data-index="3">
              <span>AB</span>
              <span className="sort">
                <i className="sortIcon"></i>
              </span>
            </th>
            <th className="sortable col-4" data-index="4">
              <span>AVG</span>
              <span className="sort">
                <i className="sortIcon"></i>
              </span>
            </th>
            <th className="sortable col-5" data-index="5">
              <span>BB</span>
              <span className="sort">
                <i className="sortIcon"></i>
              </span>
            </th>
            <th className="sortable col-6" data-index="6">
              <span>H</span>
              <span className="sort">
                <i className="sortIcon"></i>
              </span>
            </th>
            <th className="sortable col-7" data-index="7">
              <span>HBP</span>
              <span className="sort">
                <i className="sortIcon"></i>
              </span>
            </th>
            <th className="sortable col-8" data-index="8">
              <span>HR</span>
              <span className="sort">
                <i className="sortIcon"></i>
              </span>
            </th>
            <th className="sortable col-9" data-index="9">
              <span>K</span>
              <span className="sort">
                <i className="sortIcon"></i>
              </span>
            </th>
            <th className="sortable col-10" data-index="10">
              <span>OPS</span>
              <span className="sort">
                <i className="sortIcon"></i>
              </span>
            </th>
            <th className="sortable col-11" data-index="11">
              <span>PA</span>
              <span className="sort">
                <i className="sortIcon"></i>
              </span>
            </th>
            <th className="sortable col-12" data-index="12">
              <span>RBI</span>
              <span className="sort">
                <i className="sortIcon"></i>
              </span>
            </th>
            <th className="sortable col-13" data-index="13">
              <span>SF</span>
              <span className="sort">
                <i className="sortIcon"></i>
              </span>
            </th>
            <th className="sortable col-14" data-index="14">
              <span>TB</span>
              <span className="sort">
                <i className="sortIcon"></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {statsArray.map((game, i) =>
            <EachGame stats={game} key={i} index={i} />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default GameStats;