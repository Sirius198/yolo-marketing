import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  polarChartDataCharts,
  polarChartOptionsCharts,
} from 'src/lib/variables/charts';

export interface PolarChartProps {
  chartData?: any[];
  chartOptions?: any;
}

interface PolarChartState {
  chartData?: any[];
  chartOptions?: any;
}

const defaultProps: PolarChartProps = {
  chartData: polarChartDataCharts,
  chartOptions: polarChartOptionsCharts,
};

class PolarChart extends React.Component<
  PolarChartProps,
  PolarChartState
> {
  constructor(props: PolarChartProps) {
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
        type="polarArea"
        width="100%"
        height="100%"
      />
    );
  }
}

export default PolarChart;
