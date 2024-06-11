import { Breadcrumb, Layout, Space, Switch, theme } from "antd";
import React, { useEffect, useState } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import Header from "../../layouts/Header";
import { Content, Footer } from "antd/es/layout/layout";
import FooterWithSocialLinks from "../../layouts/Footer";
import * as UserService from '../../service/UserService'

const WorkingPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [driverProfile, setDriverProfile] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    image: "",
    driverDetail: {
    }
  });
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetchUserDataById();
  }, []);

  const fetchUserDataById = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await UserService.getYourProfile(token);
      const { name, email, image,driverDetail } = response.account;
      setUserData({ name, email, image, driverDetail});
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleStatusChange = async (checked) => {
    console.log(driverProfile);
    console.log(`switch to ${checked}`);
    await setDriverProfile((prev) => ({ ...prev, workingStatus: checked }));
    await handleSubmit();
  };

  const handleSubmit = async (e) => {
    try {
      const res = await UserService.updateUser(driverProfile.id, userData, token);
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  
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
              minHeight: 1000,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Space>
              <div>
              Working Status:
              </div>
              {(driverProfile.workingStatus === true) ? 
              <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
              onChange={handleStatusChange}
            /> : 
            <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={handleStatusChange}
          />}
              </Space>
          </div>
        </Content>
        <Footer>
          <FooterWithSocialLinks />
        </Footer>
      </Layout>
    </>
  );
};

export default WorkingPage;
