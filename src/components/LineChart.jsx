//imports
import React from 'react'
import Chart from 'chart.js/auto';
import moment from 'moment';
import { Line } from "react-chartjs-2";

import { Col ,Row,Typography} from 'antd';


//const
const {Title}=Typography;

//render
const LineChart = ({coinHistory,currentPrice,coinName}) => {
    console.log(coinHistory)
    const coinPrice = [];
const coinTimestamp = [];

for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
  coinPrice.push(coinHistory?.data?.history[i].price);
  //coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  var date = new Date((new Date(coinHistory?.data?.history[i].timestamp) * 1000)); // Convert seconds to milliseconds

  var optionst = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', };
  var formattedDate = new Intl.DateTimeFormat('en-US', optionst).format(date);
  coinTimestamp.push(formattedDate)
  
}

  
const data = {
    labels: coinTimestamp.reverse(),
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice.reverse(),
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };
const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
   <>
    <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
   </>
  )
}

export default LineChart