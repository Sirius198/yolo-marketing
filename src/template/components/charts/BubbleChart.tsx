import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import {
  bubbleChartData,
  bubbleChartOptions,
} from 'src/lib/variables/charts';

export type BubbleChartProps = {
  chartData: any[];
  chartOptions: any;
};

type ChartState = {
  chartData: any[];
  chartOptions: any;
};

const defaultProps: BubbleChartProps = {
  chartData: bubbleChartData,
  chartOptions: bubbleChartOptions,
};

class BubbleChart extends React.Component<BubbleChartProps, ChartState> {
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
        type="bubble"
        width="100%"
        height="100%"
      />
    );
  }
}

export default BubbleChart;
