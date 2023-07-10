import { Input, Select, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import PaginationComponent from "../../../Common/Pagination";
import { Columns } from "./ColumnData";
import { PartnerPredicate } from "../../../Utils/Options";
import { getPartnerList } from "../../../services/apiFunctions";

const Partners = () => {
  const [start, setStart] = useState(0);
  const [current, setCurrent] = useState(1);
  const [numberOfData,setNumberOfData] = useState(30);
  const totalCount = 30;
  const [numberOfPAges, setNumberOfPages] = useState(0);
  const [showSpin, setShowSpin] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [fields, setFields] = useState({
    type: PartnerPredicate[0].value,
    searchString: "",
  });
  const handleSearchString = () => {
    getAllPartnerList(numberOfData, 0);
  };
  const getAllPartnerList = (page, start) => {
    setShowSpin(true)
    const payload = {
      Pagination: {
        Start: start,
        TotalItemCount: totalCount,
        Number: page,
        NumberOfPages: numberOfPAges,
      },
      Search: {
        PredicateObject:
          fields.searchString !== null && fields.searchString !== ""
            ? { [fields.type]: fields.searchString }
            : null,
      },
      Sort: {},
    };
    getPartnerList(payload)
      .then((res) => {
        const filterdData = res.items.map((item, index) => {
          return { ...item, sno: index + 1 };
        });
        setDataSource(filterdData);
        setNumberOfPages(res.numberOfPages);
      })
      .catch((err) => console.log(err)).finally(()=>setShowSpin(false))
  };
  useEffect(() => {
    getAllPartnerList(numberOfData, start);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handlepageChange = (page, pagesize) => {
    setCurrent(page);
    setStart((page - 1) * numberOfData);
    // setStart((page - 1) * numberOfData)
    const startPage = (page - 1) * numberOfData;
    getAllPartnerList(numberOfData, startPage);
  };
  return (
    <>
    <p className="font-bold text-lg mb-4">Partners List</p>
     <div className="flex justify-between items-center"> <div className="input_fields">
        <Select
          className="mb-2 w-full "
          value={fields.type}
          onChange={(val) => setFields({ ...fields, type: val })}
          defaultValue={PartnerPredicate[0].value}
          options={PartnerPredicate}
        />
        <br />
        <Input.Search
          value={fields.searchString}
          onChange={(e) =>
            setFields({ ...fields, searchString: e.target.value })
          }
          onSearch={handleSearchString}
          className="searchBar w-full "
          placeholder="Select and Search"
          enterButton="Search"
          size="large"
        />
      </div>
      <p className="bg-[#113150] p-3 text-white rounded-lg cursor-pointer">Add Partner</p></div>
      <div className="mt-3">
        <Spin spinning={showSpin} tip="Loading...">
          <Table
            className="custom-table overflow-x-scroll text-white rounded-none"
            columns={Columns()}
            pagination={false}
            dataSource={dataSource}
          />
        </Spin>
      </div>
      <PaginationComponent
        current={current}
        numberOfPAges={numberOfPAges}
        start={start}
        setNumberOfData={setNumberOfData}
        apiFunction={getAllPartnerList}
        handlepageChange={handlepageChange}
        numberOfData={numberOfData}
      />
    </>
  );
};

export default Partners;