import React, { useEffect, useState } from "react";
import { Select, Spin, Table, Button } from "antd";
import Header from "./Header";
import { getPackageListdata } from "../services/apiFunctions";
const CommonSettingLayout = ({
  PageName,
  setFields,
  handleButton,
  fields,
  showSpin,
  showButton,
  columns,
  btnText,
  dataSource,
}) => {
  const [packagelist, setpackageList] = useState([
    {
      value: "Select a Package",
      label: "Select a Package",
      disabled: true,
    },
  ]);
  useEffect(() => {
    getPackageListdata().then((res) => {
      const changes = res.data.map((i, index) => {
        return { label: i.text, value: `number:${index + 1}` };
      });
      setpackageList([...packagelist, ...changes]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header PageName={PageName} />
      <div className="filters mt-5 flex justify-between gap-2 items-center flex-wrap">
        <Select
          className="w-1/2"
          value={fields}
          onChange={(val) => setFields(val)}
          defaultValue={packagelist[0]?.value}
          placeholder="Selact a Package"
          options={packagelist}
        />
        {showButton ? (
          <Button
            className="bg-[#000000] rounded-full hover:text-white text-white hover:border-none"
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
