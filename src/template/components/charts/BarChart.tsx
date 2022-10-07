import React, { Component } from 'react';
import Chart from 'react-apexcharts';

import {
  barChartDataHoursSpent,
  barChartOptionsHoursSpent,
} from 'src/lib/variables/charts';

export type BarChartProps = {
  chartData?: any[];
  chartOptions?: any;
};
type BarChartState = {
  chartData?: any[];
  chartOptions?: any;
};

const defaultProps: BarChartProps = {
  chartData: barChartDataHoursSpent,
  chartOptions: barChartOptionsHoursSpent,
};

class BarChart extends Component<BarChartProps, BarChartState> {
  constructor(props: { chartData: any[]; chartOptions: any }) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  static defaultProps = defaultProps;

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }

  render() {
    return (
      <Chart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="bar"
        width="100%"
        height="100%"
      />
    );
  }
}

export default BarChart;
