import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { clearLocalStorageItem, getLocalStorageItem } from "../Utils/index";
import { Images } from "../Controller/image";
import { items } from "./Menuitems";
import { Logout } from "../services/Auth";
import { useNavigate } from "react-router-dom";

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
  const navigate=useNavigate()
  const handlelogout = () => {
    Logout()
      .then((res) => {
        clearLocalStorageItem()
        navigate("/")
      })
      .catch((err) => console.log(err));
  };
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
      <Sider  style={{ position: 'fixed', height: '100vh', overflow: 'auto' }} trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical flex justify-center items-center m-2">
          <img src={Images.pinLogo} alt="logo" width={80} height={50} />
        </div>
        <Menu
          theme="dark"
          className=""
          mode="inline"
          defaultSelectedKeys={[selectedTab]}
          items={items}
        />
      </Sider>
      <Layout className="transition-all" style={{ marginLeft: collapsed?"80px":"200px" ,transition:"0.2s all ease-in-out"}}>
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
            className="bg-[#113150] button hover:bg-yellow-600"
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
