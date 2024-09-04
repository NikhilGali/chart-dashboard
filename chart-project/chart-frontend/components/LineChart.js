
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LineChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/line-chart-data/')
      .then(response => {
        const data = {
          labels: response.data.labels,
          datasets: [
            {
              label: 'Line Chart',
              data: response.data.data,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              fill: false,
            },
          ],
        };
        setChartData(data);
      })
      .catch(error => console.error('Error fetching line chart data:', error));
  }, []);

  return <Line data={chartData} />;
};

export default LineChart;
