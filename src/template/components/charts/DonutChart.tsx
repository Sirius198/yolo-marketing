import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  donutChartDataGeneral,
  donutChartOptionsGeneral,
} from 'src/lib/variables/charts';

export type DonutChartProps = {
  chartData: any[];
  chartOptions: any;
};

type ChartState = {
  chartData: any[];
  chartOptions: any;
};

export const defaultProps: DonutChartProps = {
  chartData: donutChartDataGeneral,
  chartOptions: donutChartOptionsGeneral,
};

class DonutChart extends React.Component<DonutChartProps, ChartState> {
  constructor(props: DonutChartProps) {
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
        type="donut"
        width="100%"
        height="100%"
      />
    );
  }
}

export default DonutChart;
