import {  Pagination, Select } from 'antd'
import React from 'react'
import { NumberPerPage } from '../Utils/Options'

const PaginationComponent = ({current,numberOfPAges,handlepageChange,numberOfData,start,apiFunction,setNumberOfData}) => {
  return (
    <>
    <div className="flex justify-end mt-3 gap-10 items-center">
        <Pagination
          current={current}
          total={numberOfPAges * 30}
          pageSize={30}
          // pageSizeOptions={false}
          showQuickJumper={true}
          showSizeChanger={false}
          onChange={handlepageChange}
        />
        <div className="flex justify-around items-center gap-2">
          <p>PageSize</p>
          <Select
          className="mb-2 w-full "
          onChange={(val) => setNumberOfData( val)}
          defaultValue={NumberPerPage[2].value}
          options={NumberPerPage}
        />
        {/* <Input.Search type="number" min={1}  onSearch={(value)=>setNumberOfData(value)} title="df" className="w-20" size="small"/> */}
        </div>
      </div>
    </>
  )
}

export default PaginationComponent