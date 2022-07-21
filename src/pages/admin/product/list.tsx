import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Switch, Select } from 'antd';
import { Link } from 'react-router-dom'
import { SearchOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { getAll } from "../../../service/product";
import { useQuery } from 'react-query'

const { Paragraph } = Typography

const { Option } = Select;

interface DataType {
    id: number;
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
    show: boolean
}
const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
};
const onChangeSelect = (value: string) => {
    console.log(`selected ${value}`);
  };
  
  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  
const columns: ColumnsType<DataType> = [
    {
        title: '#',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name'.slice(0, 30),
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Image',
        dataIndex: 'imageUrl',
        key: 'imageUrl',
        render: image => <img width={100} height={100} src={image}></img>,
    },
    {
        title: 'Đặc điểm',
        dataIndex: 'feature'.slice(0, 10),
        key: 'feature',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Giá khuyến mãi',
        dataIndex: 'saleOffPrice',
        key: 'saleOffPrice',
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'An/Hien',
        dataIndex: 'show',
        key: 'show',
        render: () => {
            return (
                <Switch defaultChecked onChange={onChange} />
            )
        }
    },
    {
        title: 'Action',
        dataIndex: '',
        key: '',
        render: (record: any) => {
            return (
                <Link to={`/admin/product/${record.id}/edit`}>
                <EditOutlined style={{ fontSize: '25px', color: '#08c' }} />
                </Link>
            )
        }
    },
];



const ListProduct = () => {
    const [dataTable, setDataTable] = useState([])



    useEffect(() => {
        const fetchData = async () => {
            const data = await getAll()
            console.log(data)
            setDataTable(data.data)
        }

        fetchData()

    }, [])



    return (
        <>
            <Breadcrumb>
            <Typography.Title level={2} style={{ margin: 0 }}>
                        Điện thoại
                    </Typography.Title>
                {/* <div>
                  
                    <span>Bo loc</span>
                    <SelectProduct>
                       
                    <div>
                        Danh muc san pham
                    </div>
                    <div>
                        <Select
                            // showSearch
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={onChangeSelect}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
                            }
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </div>
                    </SelectProduct>
                  
                </div> */}

                <div>
                    <Link to="/admin/product/add">
                        <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
                    </Link>
                </div>
            </Breadcrumb>
            <Table  columns={columns} dataSource={dataTable} />
        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const SelectProduct = styled.div`
    margin-left: 200px;
    /* margin: 30px 0px 30px 200px ; */


`

export default ListProduct