import { FileTextOutlined } from '@ant-design/icons'
import React from 'react'

const Header = ({PageName}) => {
  return (
   <>
    <div className="header  mx-3  text-lg font-bold ">
    <p>{PageName}</p>
  {/* <div className=" flex my-3 justify-start text-lg font-bold items-center gap-2">
    <p>
      <FileTextOutlined />
    </p>
    <p>Transactions</p>
  </div> */}
  </div>
  <hr/>
   </>
  )
}

export default Header