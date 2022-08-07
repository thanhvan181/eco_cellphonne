import { Row, Select } from 'antd'
import React from 'react'
import * as S from "./style"
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
      <S.WrapperSelect>
          
          <Row justify='end'>
             
             
              <Select style={{ width: "20%" }} size="large" onChange={onChange}>
                  {list && list.map((sub: any) => {
                      return (
                          <>
                              <Option value={sub._id}>{sub.name}</Option>
                          </>
                      )
                  })}



              </Select>



          </Row>
    </S.WrapperSelect>
  )
}

export default FiterCategory