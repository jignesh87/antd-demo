import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Side from '../components/Side';
import About from '../components/About'
import Contact from '../components/Contact'
import Document from '../components/Document'
import TableList from '../components/Brand/List'

const { Header, Content } = Layout;

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
         <Layout>
            <Side colapseflag={this.state.collapsed}/>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
              >
                <Route exact path="/brands" component={TableList} />
                <Route path="/contact" component={Contact} />
                <Route path="/document" component={Document} />
              </Content>
            </Layout>
          </Layout>
      </Router>
    );
  }
}
export default Home