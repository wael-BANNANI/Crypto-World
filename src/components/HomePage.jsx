//imports
import React from 'react'
import millify from 'millify';
import { Typography,Row ,Col,Statistic } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

//consts
const {Title}=Typography;

const HomePage = () => {
  const {data,isFetching}=useGetCryptosQuery(10);
 
  const globalStats = data?.data?.stats;
  if(isFetching) return "...loading";
  return (
   <>
        <Title level={2} className='heading ' >Global Crypto Stats</Title>
        <Row>
          <Col span={12} > <Statistic title="total Cryptocurrencies" value={globalStats.total} /> </Col>
          <Col span={12} > <Statistic title="total Exchanges" value={millify(globalStats.totalExchanges)} /> </Col>
          <Col span={12} > <Statistic title="total Market Cap" value={millify(globalStats.totalMarketCap)} /> </Col>
          <Col span={12} > <Statistic title="total 24h Volume" value={millify(globalStats.total24hVolume)} /> </Col>
          <Col span={12} > <Statistic title="total Markets" value={millify(globalStats.totalMarkets)} /> </Col>

        </Row>
        <div className="home-heading-container">
          <Title level={2} className="home-title" >Top 10 Cryptocurrencies in the world</Title>
          <Title level={3} className="show-more" > <Link to="/cryptocurrencies">Show more </Link></Title>
        </div>
        <Cryptocurrencies simplified  />

        <div className="home-heading-container">
          <Title level={2} className="home-title" >Latest Crypto News</Title>
          <Title level={3} className="show-more" > <Link to="/news">Show more </Link></Title>
        </div>
        <News simplified />
   </>
  )
}

export default HomePage