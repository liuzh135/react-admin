/**
 * @fileName: ExtBaseicTable.jsx
 * Created on 2017-11-23
 *
 * 风险管控 表格 提议
 */
import React from 'react';
import { Table } from 'antd';

class ExtBaseicTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {style,pagination,data,columns,bordered} = this.props;
        return (
            <Table style = {style} columns={columns} dataSource={data} bordered={bordered}
                   pagination={pagination}/>
        )
    }
}

export default ExtBaseicTable;