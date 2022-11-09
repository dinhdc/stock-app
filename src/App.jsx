import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useNavigate, Route, Routes, useLocation } from "react-router-dom";

import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import "./app.css";
import Stock from "./pages/Stock";
import StockCode from "./pages/StockCode";
import SignUp from "./pages/SignUp";
import { useSelector } from "react-redux";
import Login from "./pages/Login";

const { Header, Sider, Content } = Layout;
const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const key = listUrl.filter((item) => item.linkto === pathname)[0].key;
    setActiveRouter(key);
  }, []);

  const hanleClick = ({ key }) => {
    const rout = listUrl.filter((item) => item.key === key)[0];
    if (rout) {
      navigate(rout.linkto);
    }
  };

  var listUrl = [
    {
      key: "1",
      icon: <UserOutlined />,
      linkto: "/",
      label: (
        <span onClick={(e) => hanleClick(e)} rel="noopener noreferrer">
          Bảng giá CK
        </span>
      ),
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      linkto: "/code",
      label: (
        <span onClick={(e) => hanleClick(e)} rel="noopener noreferrer">
          Bảng mã CK
        </span>
      ),
    },
    {
      key: "3",
      icon: <VideoCameraOutlined />,
      linkto: "/sign-up",
      label: (
        <span onClick={(e) => hanleClick(e)} rel="noopener noreferrer">
          Đăng ký
        </span>
      ),
    },
  ];
  const [collapsed, setCollapsed] = useState(false);
  const [activeRouter, setActiveRouter] = useState(listUrl[0].key);
  const isLogin = useSelector((state) => state.users.isLogin);

  return (
    <>
      {isLogin ? (
        <Layout
          style={{
            height: "100vh",
          }}
        >
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={activeRouter}
              items={listUrl}
              onClick={hanleClick}
            />
          </Sider>
          <Layout className="site-layout" style={{ width: 0 }}>
            <Header
              className="site-layout-background"
              style={{
                paddingLeft: 20,
              }}
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Routes>
                <Route path="/" element={<Stock />} />
                <Route path="/code" element={<StockCode />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      ) : (
        <Layout
          style={{
            height: "100vh",
            paddingTop: "100px",
          }}
        >
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/sign-in" element={<Login />} />
          </Routes>
        </Layout>
      )}
    </>
  );
};
export default App;
