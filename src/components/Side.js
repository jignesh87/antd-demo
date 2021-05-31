import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link , withRouter } from "react-router-dom";

import {

    DashboardOutlined,
    VideoCameraOutlined,
    FileOutlined,
    LogoutOutlined
  } from '@ant-design/icons';

const { Sider } = Layout;
function SideComp(props) {
    const [defaultkey, setDefaultKey] = useState(2);

    return (
        <Sider trigger={null} collapsible collapsed={props.colapseflag}>
           <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={defaultkey}>
                <Menu.Item key="1" icon={<DashboardOutlined />} onClick={() => setDefaultKey(1)}>
                    <Link to="/dashboard">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={() => setDefaultKey(2)}>
                    <Link to="/brands">Brands</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<FileOutlined />} onClick={() => setDefaultKey(3)}>
                    <Link to="/document">Documents</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<LogoutOutlined />} onClick={() => setDefaultKey(4)}>
                    <Link to="/contact">Logout</Link>
                </Menu.Item>
            </Menu>

            
        </Sider>
    )
}        
const ShowTheLocationWithRouter = withRouter(SideComp);

export default ShowTheLocationWithRouter;