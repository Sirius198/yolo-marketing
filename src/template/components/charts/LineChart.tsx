import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from 'src/lib/variables/charts';

export type LineChartProps = {
  chartData?: any[];
  chartOptions?: any;
};

type LineChartState = {
  chartData?: any[];
  chartOptions?: any;
};

const defaultProps: LineChartProps = {
  chartData: lineChartDataTotalSpent,
  chartOptions: lineChartOptionsTotalSpent,
};

class LineChart extends React.Component<LineChartProps, LineChartState> {
  constructor(props: LineChartProps) {
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
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="line"
        width="100%"
        height="100%"
      />
    );
  }
}

export default LineChart;
