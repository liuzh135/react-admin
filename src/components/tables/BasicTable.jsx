/**
 * Created by hao.cheng on 2017/4/15.
 */
import React from 'react';
import { Table, Icon } from 'antd';


const columns = [{
    title: 'Name',
    dataIndex: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];


const data = [];

for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}


const BasicTable = () => (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 300 }}/>
);

export default BasicTable;