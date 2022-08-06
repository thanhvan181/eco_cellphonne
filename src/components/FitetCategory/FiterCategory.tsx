import { Row, Select } from 'antd'
import React from 'react'

import { useSelector, useDispatch } from "react-redux";
import { getProductinCategory } from '../../store/products/actions';

type Props = {}
const { Option } = Select;
const FiterCategory = (props: Props) => {
    const dispatch = useDispatch()
    const list = useSelector((store: any) => store.category.list.result)
    const onChange = (value: any) => {
        console.log("value", value)
        dispatch(getProductinCategory(value) as any)

    }
  return (
      <div>
          <Row>

              <Select style={{ width: "40%" }} size="large" onChange={onChange}>
                  {list && list.map((sub: any) => {
                      return (
                          <>
                              <Option value={sub._id}>{sub.name}</Option>
                          </>
                      )
                  })}



              </Select>



          </Row>
    </div>
  )
}

export default FiterCategory