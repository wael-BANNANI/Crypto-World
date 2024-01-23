import React, { useEffect, useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";
const Navbar = () => {
  const [activeMenu,setActiveMenu]=useState(false);
  const [screenSize,setScreenSize]=useState(null);

  useEffect(()=>{
    const handleResize=()=> setScreenSize(window.innerWidth);
    window.addEventListener('resize',handleResize);
    handleResize();
    return ()=> window.removeEventListener('resize',handleResize);
  },[]);

  useEffect(()=>{
      screenSize >1040 ? setActiveMenu(true) : setActiveMenu(false);
  },[screenSize])
 
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto World</Link>
        </Typography.Title>
        {screenSize<1040&&(
          <Button className="menu-controle-container" onClick={()=>setActiveMenu(!activeMenu)} >
          <MenuOutlined/>
        </Button>
        )}
        
      </div>
      {activeMenu &&(
        <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>{" "}
        </Menu.Item>

        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
       
      </Menu>
      )

      }
      
    </div>
  );
};

export default Navbar;
