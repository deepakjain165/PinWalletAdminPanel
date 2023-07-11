import React, { useEffect, useState } from "react";
import PaginationComponent from "../../../Common/Pagination";
import { Input, Spin, Table, message } from "antd";
import {
  changeServiceStatuseById,
  deleteService,
  getServicesList,
} from "../../../services/apiFunctions";
import { Columns } from "./ColumnData";
import CreateEditModal from "./CreateEditModal";
import { messageConfiguration } from "../../../Utils";
import ConfirmModal from "../../../Common/ConfirmModal";
import { useCustomState } from "../../../Hooks/Usehooks";

const Services = () => {
  const {
    handlepageChange,
    start,
    current,
    setNumberOfData,
    numberOfData,
    handlechangeStatus,
    setNumberOfPages,
    numberOfPAges,
    setShowSpin,
    showSpin,
    dataSource,
    setDataSource,
  } = useCustomState(getAllServices,changeServiceStatuseById);
  const [fields, setFields] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openFrom, setOpenFrom] = useState("");
  const [deleteModal, setDeleteModal] = useState(null);
  const totalCount = 30;
  const [packageId, setPackageId] = useState(null);
  function getAllServices(page, start) {
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
    getServicesList(payload)
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
    getAllServices(numberOfData, start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal, deleteModal]);
  const handleSearchString = () => {
    getAllServices(numberOfData, 0);
  };
  const handleDelete = () => {
    deleteService(packageId.id)
      .then((res) => {
        message.open(
          messageConfiguration("success", "Package Deleted Successfully", 3)
        );
        setDeleteModal(false);
        getAllServices(numberOfData, start);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <p className="font-bold text-lg mb-4">Services List</p>
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
          Add Service
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
          openby="Service"
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default Services;
