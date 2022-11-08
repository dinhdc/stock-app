import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";

const MyHeader = () => {
  const items1 = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
      />
    </Header>
  );
};

export default MyHeader;
