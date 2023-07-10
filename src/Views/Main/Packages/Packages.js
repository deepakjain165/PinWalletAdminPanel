import React, { useEffect, useState } from "react";
import PaginationComponent from "../../../Common/Pagination";
import { Input, Spin, Table, message } from "antd";
import {
  changePackageStatuseById,
  deletePackage,
  getPackageList,
} from "../../../services/apiFunctions";
import { Columns } from "./columnData";
import CreateEditModal from "./CreateEditModal";
import { messageConfiguration } from "../../../Utils";
import ConfirmModal from "../../../Common/ConfirmModal";

const Packages = () => {
  const [start, setStart] = useState(0);
  const [current, setCurrent] = useState(1);
  const [numberOfData, setNumberOfData] = useState(30);
  const totalCount = 30;
  const [numberOfPAges, setNumberOfPages] = useState(0);
  const [showSpin, setShowSpin] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [fields, setFields] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openFrom, setOpenFrom] = useState("");
  const [deleteModal, setDeleteModal] = useState(null);
  const [packageId, setPackageId] = useState(null);
  const getAllPackages = (page, start) => {
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
          fields !== null && fields !== "" ? { Name: fields } : null,
      },
      Sort: {},
    };
    getPackageList(payload)
      .then((res) => {
        const filterdData = res.items.map((item, index) => {
          return { ...item, sno: index + 1 };
        });
        setDataSource(filterdData);
        setNumberOfPages(res.numberOfPages);
      })
      .catch((err) => console.log(err))
      .finally(() => setShowSpin(false));
  };
  useEffect(() => {
    getAllPackages(numberOfData, start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal, deleteModal]);
  const handleSearchString = () => {
    getAllPackages(numberOfData, 0);
  };
  const handlepageChange = (page, pagesize) => {
    setCurrent(page);
    setStart((page - 1) * numberOfData);
    // setStart((page - 1) * numberOfData)
    const startPage = (page - 1) * numberOfData;
    getAllPackages(numberOfData, startPage);
  };
  const handleDelete = () => {
    deletePackage(packageId.id)
      .then((res) => {
        message.open(
          messageConfiguration("success", "Package Deleted Successfully", 3)
        );
        setDeleteModal(false);
        getAllPackages(numberOfData, start);
      })
      .catch((err) => console.log(err));
  };
  const handlechangeStatus = (id) => {
    changePackageStatuseById(id)
      .then((res) => {
        getAllPackages(numberOfData, start);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <p className="font-bold text-lg mb-4">Packages List</p>
      <div className="flex justify-between items-center flex-wrap gap-y-2">
        {" "}
        <div className="input_fields">
          <Input.Search
            value={fields}
            onChange={(e) => setFields(e.target.value)}
            onSearch={handleSearchString}
            className="searchBar w-full "
            placeholder="Name"
            enterButton="Search"
            size="large"
          />
        </div>
        <p
          onClick={() => {
            setOpenFrom("add");
            setPackageId(null);
            setOpenModal(true);
          }}
          className="bg-[#113150] p-3 text-white rounded-lg cursor-pointer"
        >
          Add Package
        </p>
      </div>
      <div className="mt-3">
        <Spin spinning={showSpin} tip="Loading...">
          <Table
            className="custom-table overflow-x-scroll text-white rounded-none"
            columns={Columns(
              setPackageId,
              setDeleteModal,
              setOpenModal,
              setOpenFrom,
              handlechangeStatus
            )}
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
        handlepageChange={handlepageChange}
        numberOfData={numberOfData}
      />
      {openModal && (
        <CreateEditModal
          openFrom={openFrom}
          packageId={packageId}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      {deleteModal && (
        <ConfirmModal
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
          openby="package"
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default Packages;
