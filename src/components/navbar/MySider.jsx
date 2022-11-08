import Sider from "antd/lib/layout/Sider";
import React from "react";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Menu } from "antd";
const MySider = ({ collapsed, setCollapsed }) => {
  const listUrl = [
    {
      key: "1",
      icon: <UserOutlined />,
      linkto: "/",
      label: (
        <a href="/" rel="noopener noreferrer">
          Bảng giá CK
        </a>
      ),
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      linkto: "/code",
      label: (
        <a href="/code" rel="noopener noreferrer">
          Bảng mã CK
        </a>
      ),
    },
  ];
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={listUrl}
      />
    </Sider>
  );
};

export default MySider;
