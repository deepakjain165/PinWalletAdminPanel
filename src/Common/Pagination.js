import { Input, Pagination } from 'antd'
import React from 'react'

const PaginationComponent = ({current,numberOfPAges,handlepageChange,numberOfData,start,apiFunction}) => {
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
        <Input.Search type="number" min={1}  onSearch={(value)=>apiFunction(value===""?numberOfData:value,start)} title="df" className="w-20" size="small"/>
        </div>
      </div>
    </>
  )
}

export default PaginationComponent