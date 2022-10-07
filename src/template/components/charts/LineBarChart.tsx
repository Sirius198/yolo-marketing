import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import {
  lineBarChartData,
  lineBarChartOptions,
} from 'src/lib/variables/charts';

export type LineBarChartProps = {
  chartData?: any[];
  chartOptions?: any;
};

type LineBarChartState = {
  chartData?: any[];
  chartOptions?: any;
};

const defaultProps: LineBarChartProps = {
  chartData: lineBarChartData,
  chartOptions: lineBarChartOptions,
};

class LineBarChart extends React.Component<
  LineBarChartProps,
  LineBarChartState
> {
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
        type="line"
        width="100%"
        height="100%"
      />
    );
  }
}

export default LineBarChart;
