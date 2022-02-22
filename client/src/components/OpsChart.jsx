import React from 'react';
import Chart from "react-apexcharts";

class OpsChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: "OPS",
        data: this.props.ops
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Monthly OPS',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.series[0].data !== this.props.ops) {
      this.setState({
        series: [{
          name: "OPS",
          data: this.props.ops
        }]
      })
    }
  }

  render() {
    return (
      <div id="chart">
        <Chart options={this.state.options} series={this.state.series} type="line" height={350} />
      </div>
    );
  }
}

export default OpsChart;