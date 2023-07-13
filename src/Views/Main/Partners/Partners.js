import { Input, Select, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import PaginationComponent from "../../../Common/Pagination";
import { Columns } from "./ColumnData";
import { PartnerPredicate } from "../../../Utils/Options";
import {
  changePartnerStatus,
  getPartnerList,
} from "../../../services/apiFunctions";
import { useCustomState } from "../../../Hooks/Usehooks";
import KeyModal from "./KeyModal";

const Partners = () => {
  const {
    handlepageChange,
    start,
    current,
    setNumberOfData,
    numberOfData,
    setNumberOfPages,
    numberOfPAges,
    handlechangeStatus,
    setShowSpin,
    showSpin,
    dataSource,
    setDataSource,
  } = useCustomState(getAllPartnerList, changePartnerStatus);
  const totalCount = 30;
  const [fields, setFields] = useState({
    type: PartnerPredicate[0].value,
    searchString: "",
  });
  const [openKeyModal, setKeyModal] = useState(false);
  const [rowData, setRowData] = useState(null);
  const handleSearchString = () => {
    getAllPartnerList(numberOfData, 0);
  };
  function getAllPartnerList(page, start) {
    setShowSpin(true);
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
      .catch((err) => console.log(err))
      .finally(() => setShowSpin(false));
  }
  useEffect(() => {
    getAllPartnerList(numberOfData, start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleOpenKeyModal = (data) => {
    setRowData(data);
    setKeyModal(true);
  };
  return (
    <>
      <p className="font-bold text-lg mb-4">Partners List</p>
      <div className="flex justify-between items-center flex-wrap gap-y-2">
        {" "}
        <div className="input_fields">
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
        {/* <p className="bg-[#113150] p-3 text-white rounded-lg cursor-pointer">
          Add Partner
        </p> */}
      </div>
      <div className="mt-3">
        <Spin spinning={showSpin} tip="Loading...">
          <Table
            className="custom-table overflow-x-scroll text-white rounded-none"
            columns={Columns(handlechangeStatus, handleOpenKeyModal)}
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
      {openKeyModal && (
        <KeyModal
          id={rowData}
          keyModal={openKeyModal}
          setKeyModal={setKeyModal}
        />
      )}
    </>
  );
};

export default Partners;
