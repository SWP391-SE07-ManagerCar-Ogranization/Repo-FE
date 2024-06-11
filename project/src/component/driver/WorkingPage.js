import { Breadcrumb, Layout, Switch, theme } from "antd";
import React from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import Header from "../../layouts/Header";
import { Content } from "antd/es/layout/layout";
import FooterWithSocialLinks from "../../layouts/Footer";
const WorkingPage = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

  return (
    <>
      <Layout>
        <Header />
        <Content
          style={{
            padding: "0 48px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Driver</Breadcrumb.Item>
            <Breadcrumb.Item>Working</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </div>
        </Content>
      </Layout>
      {/* <FooterWithSocialLinks/> */}
    </>
  );
};

export default WorkingPage;
