import React from "react";
import { Select, Spin, Table,Button } from "antd";
import Header from "./Header";
const CommonSettingLayout = ({
  PageName,
  setFields,
  handleButton,
  fields,
  options,
  showSpin,
  showButton,
  btnText,
  columns,
  dataSource,
}) => {
  function getPackageDetails(){
getPackageDetails()
.then((res)=>{
  console.log(res)

})
  }
  return (
    <>
      <Header PageName={PageName} />
      <div className="filters mt-5 flex justify-start md:justify-around gap-4 items-center flex-wrap">
      
          <Select
          className="w-1/6 mb-2 "
            value={fields}
            onChange={(val) => setFields(val)}
            defaultValue={options[0].value}
            options={options}
          />
          <br />
      
        {showButton ? (
          <Button
            className="bg-[#1572e8] hover:text-white text-white hover:border-none"
            title="search"
            onClick={handleButton}
          >
            {btnText}
          </Button>
        ) : (
          ""
        )}

      </div>
      <div className="mt-3">
        <Spin spinning={showSpin} tip="Loading...">
          <Table
            className="custom-table overflow-x-scroll text-white rounded-none"
            columns={columns}
            pagination={false}
            dataSource={dataSource}
          />
        </Spin>
      </div>
    </>
  );
};
export default CommonSettingLayout;
