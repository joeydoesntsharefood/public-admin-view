import React from 'react';
import { Table } from 'antd';

const expandedRowRender = (record: any) => {
  const columns = [
    { title: 'id', dataIndex: 'id', key: 'id' },
    { title: 'orderExp', dataIndex: 'orderExp', key: 'orderExp' },
    { title: 'title', dataIndex: 'title', key: 'title' },
    { title: 'uri', dataIndex: 'uri', key: 'uri' },
  ]

  return <Table columns={columns} dataSource={record.content} pagination={false} />;
}

const TablePainels = ({ data }: { data: any }) => {
  const columns = [
    { title: 'ID', dataIndex: 'painelId', key: 'painelId' },
    { title: 'Nome do painel', dataIndex: 'painelTitle', key: 'painelTitle' },
    { title: 'Editar Contéudo', dataIndex: '' }
  ]

  return (
    <>
      <Table
        columns={columns}
        expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
        dataSource={data}
      />
    </>
  );
};

export default TablePainels