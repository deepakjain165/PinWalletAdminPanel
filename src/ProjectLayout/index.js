import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { getLocalStorageItem } from "../Utils/index";
import { Images } from "../Controller/image";
import { items } from "./Menuitems";

const { Header, Sider, Content } = Layout;

const ProjectLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [windowwidth, setwindowwidth] = useState(window.innerWidth);
  const [selectedTab, setSelectedTab] = useState(
    getLocalStorageItem("selectedTab")
  );
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handlelogout = () => {};
  useEffect(() => {
    const handleResize = () => {
      setwindowwidth(window.innerWidth);
    };

    // Add event listener when the component mounts
    window.addEventListener("resize", handleResize);
    setSelectedTab(getLocalStorageItem("selectedTab"));

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    windowwidth > 1000 ? setCollapsed(false) : setCollapsed(true);
  }, [windowwidth]);
  return (
    <Layout className="h-full min-h-screen max-h-full sidebar">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical flex justify-center items-center m-2">
          <img src={Images.pinLogo} alt="logo" width={80} height={50} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectedTab]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          className="flex bg-white justify-between mx-3 items-center"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Button
            type="primary"
            className="bg-black button hover:bg-yellow-600"
            onClick={handlelogout}
          >
            Logout
          </Button>
        </Header>
        <Content
          style={{
            // margin: "24px 16px",
            padding: 10,
            // height:"100%",
            // minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProjectLayout;
