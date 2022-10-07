import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { pieChartData, pieChartOptions } from 'src/lib/variables/charts';

export type PieChartProps = {
  chartData?: any[];
  chartOptions?: any;
};

type PieChartState = {
  chartData?: any[];
  chartOptions?: any;
};

const defaultProps: PieChartProps = {
  chartData: pieChartData,
  chartOptions: pieChartOptions,
};

class PieChart extends React.Component<PieChartProps, PieChartState> {
  constructor(props: PieChartProps) {
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
        type="pie"
        width="100%"
        height="55%"
      />
    );
  }
}

export default PieChart;
