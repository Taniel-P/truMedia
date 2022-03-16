import React, { useState, useEffect } from 'react';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const GameStats = (props) => {
  console.log('PROPS', props.data)
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
  });

  const { items, requestSort, sortConfig } = useSortableData(statsArray);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  if (props.data.length === 0) {
    return (
      <div></div>
    )
  }

  return (
    <div className="gameStats">
      <h1>Game Stats</h1>
      <table className="statsTable">
        <thead className="gameStatsThead">
          <tr className="tr">
            <th>
              <button
                type="button"
                onClick={() => requestSort('gameDate')}
                className={getClassNamesFor('gameDate')}
              >
                Date
                </button>
            </th>
            <th>
            <button
                type="button"
                onClick={() => requestSort('team')}
                className={getClassNamesFor('team')}
              >
                Team
                </button>
            </th>
            <th>
            <button
                type="button"
                onClick={() => requestSort('opponent')}
                className={getClassNamesFor('opponent')}
              >
                OPP
                </button>
            </th>
            <th>
            <button
                type="button"
                onClick={() => requestSort('AB')}
                className={getClassNamesFor('AB')}
              >
                AB
                </button>
            </th>
            <th>
            <button
                type="button"
                onClick={() => requestSort('AVG')}
                className={getClassNamesFor('AVG')}
              >
                AVG
                </button>
            </th>
            <th>
            <button
                type="button"
                onClick={() => requestSort('BB')}
                className={getClassNamesFor('BB')}
              >
                BB
                </button>
            </th>
            <th>
            <button
                type="button"
                onClick={() => requestSort('H')}
                className={getClassNamesFor('H')}
              >
                H
                </button>
            </th>
            <th>
            <button
                type="button"
                onClick={() => requestSort('HBP')}
                className={getClassNamesFor('HBP')}
              >
                HBP
                </button>
            </th>
            <th>
            <button
                type="button"
                onClick={() => requestSort('HR')}
                className={getClassNamesFor('HR')}
              >
                HR
                </button>
            </th>
            <th>
            <button
                type="button"
                onClick={() => requestSort('K')}
                className={getClassNamesFor('K')}
              >
                K
                </button>
            </th>
            <th>
            <button
                type="button"
                onClick={() => requestSort('OPS')}
                className={getClassNamesFor('OPS')}
              >
                OPS
                </button>
            </th>
            <th>
            <button
                type="button"
                onClick={() => requestSort('PA')}
                className={getClassNamesFor('PA')}
              >
                PA
                </button>
            </th>
            <th>
            <button
                type="button"
                onClick={() => requestSort('RBI')}
                className={getClassNamesFor('RBI')}
              >
                RBI
                </button>
            </th>
            <th>
            <button
                type="button"
                onClick={() => requestSort('SF')}
                className={getClassNamesFor('SF')}
              >
                SF
                </button>
            </th>
            <th>
            <button
                type="button"
                onClick={() => requestSort('TB')}
                className={getClassNamesFor('TB')}
              >
                TB
                </button>
            </th>
          </tr>
        </thead>
        <tbody className="gameStatsTbody">
          {items.map((item, i) => (
            <tr key={i}>
              <td>{item.gameDate.split(' ')[0]}</td>
              <td>{item.team}</td>
              <td>{item.opponent}</td>
              <td>{item.AB}</td>
              <td>{item.AVG}</td>
              <td>{item.BB}</td>
              <td>{item.H}</td>
              <td>{item.HBP}</td>
              <td>{item.HR}</td>
              <td>{item.K}</td>
              <td>{item.OPS}</td>
              <td>{item.PA}</td>
              <td>{item.RBI}</td>
              <td>{item.SF}</td>
              <td>{item.TB}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GameStats;