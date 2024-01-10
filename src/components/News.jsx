import React, { useEffect, useState } from 'react'
import { Select,Typography,Row,Col,Avatar,Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import  cryptoImg from "../images/27538.jpg"
const {Text,Title}=Typography;
const {Option}=Select;

const News = ({simplified}) => {
  
  const {data:cryptoNews,isFetching}=useGetCryptoNewsQuery({count : simplified?6:50})
  const [newsCrypto,setNewsCrypto]=useState([])
  console.log(cryptoNews)
  useEffect(()=>{
    setNewsCrypto(cryptoNews)
  })
  if(isFetching) return "loading....";
  if(!cryptoNews )return "Loading...";

  return (
   <Row gutter={[24,24]} >
    {!simplified &&(
      <Col span={24}>
        <Select 
          showSearch
          className='select-news'
          placeholder="select crypto"
          optionFilterProp='children'
          onChange={(value)=>console.log(value)}
          filterOption={(input,option)=>option.children.toLowerCase().indexOf(input.toLowerCase())}
        >
            
        </Select>
      </Col>
    )}
      {newsCrypto?.map((News,index)=>(
        <Col xs={24} sm={12} lg={8} key={index} >
          <Card hoverable className='news-card' > 
              <a href={News.url} target='_blank' rel="noreferrer" >
                  <div className='news-image-container' > 
                      <Title className='news-title' level={4} >{News.title}</Title>
                      <img src={cryptoImg} style={{ width: '120px', height: '120px' }}  />
                     
                      
                  </div>
                  <p >
                    {News.description > 20 
                      ? `${News.description.substring(0,20)}...`
                      : News.description
                    }
                  </p>
                  <div className='provider-container'>
                      <div >
                          <Avatar src={cryptoImg} alt='news' />
                          <Text>{moment(News.date).startOf('ss').fromNow()}</Text>
                      </div>
                  </div>
              </a>
          </Card>
        </Col>
      ))}
   </Row>
  )
}

export default News