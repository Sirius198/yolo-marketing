import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  radarChartDataCharts,
  radarChartOptionsCharts,
} from 'src/lib/variables/charts';

export interface RadarChartProps {
  chartData?: any[];
  chartOptions?: any;
}
interface RadarChartState {
  chartData?: any[];
  chartOptions?: any;
}

const defaultProps: RadarChartProps = {
  chartData: radarChartDataCharts,
  chartOptions: radarChartOptionsCharts,
};

class RadarChart extends React.Component<
  RadarChartProps,
  RadarChartState
> {
  constructor(props: RadarChartProps) {
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
        type="radar"
        width="100%"
        height="100%"
      />
    );
  }
}

export default RadarChart;
