import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from 'src/lib/variables/charts';

export type LineAreaChartProps = {
  chartData?: any[];
  chartOptions?: any;
};

type ChartState = {
  chartData?: any[];
  chartOptions?: any;
};

const defaultProps: LineAreaChartProps = {
  chartData: lineChartDataTotalSpent,
  chartOptions: lineChartOptionsTotalSpent,
};

class LineChart extends React.Component<LineAreaChartProps, ChartState> {
  constructor(props: LineAreaChartProps) {
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
        type="area"
        width="100%"
        height="100%"
      />
    );
  }
}

export default LineChart;
