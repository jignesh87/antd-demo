import React from 'react';
import ReactDOM from 'react-dom';
//import 'antd/dist/antd.css';
//import './index.css';
import { Table } from 'antd';
//import reqwest from 'reqwest';

const columns = [
  {
    title: 'Brand Short Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '10%',
  },
  {
    title: 'Brand Full Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '10%',
  },
  {
    title: 'Manufacturer',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '10%',
  },
  {
    title: 'Discontinued',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '10%',
  },
  {
    title: 'Models',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '10%',
  },
  {
    title: 'Update By',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '10%',
  },
  {
    title: 'Update Date',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '10%',
  },
  
];

const getRandomuserParams = params => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params,
});

class BrandTable extends React.Component {
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  };

  componentDidMount() {
    const { pagination } = this.state;
    //this.fetch({ pagination });
  }

  handleTableChange = (pagination, filters, sorter) => {
    // this.fetch({
    //   sortField: sorter.field,
    //   sortOrder: sorter.order,
    //   pagination,
    //   ...filters,
    // });
  };

//   fetch = (params = {}) => {
//     this.setState({ loading: true });
//     reqwest({
//       url: 'https://randomuser.me/api',
//       method: 'get',
//       type: 'json',
//       data: getRandomuserParams(params),
//     }).then(data => {
//       console.log(data);
//       this.setState({
//         loading: false,
//         data: data.results,
//         pagination: {
//           ...params.pagination,
//           total: 200,
//           // 200 is mock data, you should read it from server
//           // total: data.totalCount,
//         },
//       });
//     });
//   };

  render() {
    const { data, pagination, loading } = this.state;
    return (
      <Table
        columns={columns}
        rowKey={record => record.login.uuid}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={this.handleTableChange}
      />
    );
  }
}

export default BrandTable
