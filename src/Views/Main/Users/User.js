import React, { useEffect, useState } from "react";
import PaginationComponent from "../../../Common/Pagination";
import { Input, Select, Spin, Table, message } from "antd";
import {
  DeleteUser,
  changeUserStatus,
  getUsers,
} from "./ApiFun";
import { Columns } from "./ColumnData";
import { messageConfiguration } from "../../../Utils";
import ConfirmModal from "../../../Common/ConfirmModal";
import { useCustomState } from "../../../Hooks/Usehooks";
import CreateEditModal from "./CreateEditModal";

const Users = () => {
  const {
    handlepageChange,
    start,
    current,
    setNumberOfData,
    numberOfData,
    setNumberOfPages,
    numberOfPAges,
    setShowSpin,
    showSpin,
    dataSource,
    setDataSource,
    handlechangeStatus
  } = useCustomState(getAllUsers,changeUserStatus);
  const [fields, setFields] = useState({
    type: "Email",
    search: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const [openFrom, setOpenFrom] = useState("");
  const [deleteModal, setDeleteModal] = useState(null);
  const totalCount = 30;
  const [packageId, setPackageId] = useState(null);
  function getAllUsers(page, start) {
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
          fields.search !== null && fields.search !== ""
            ? { [fields.type]: fields.search }
            : null,
      },
      Sort: {},
    };
    getUsers(payload)
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
    getAllUsers(numberOfData, start);
   
  }, [openModal, deleteModal]);
  const handleSearchString = () => {
    getAllUsers(numberOfData, 0);
  };
  const handleDelete = () => {
    DeleteUser(packageId)
      .then((res) => {
        message.open(
          messageConfiguration("success", "User Deleted Successfully", 3)
        );
        setDeleteModal(false);
        getAllUsers(numberOfData, start);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <p className="font-bold text-lg mb-4">User List</p>
      <div className="flex justify-between items-center flex-wrap gap-y-2">
        {" "}
        <div className="input_fields">
          <Select
            className="w-full mb-2"
            defaultValue={"Email"}
            value={fields.type}
            onChange={(val) => setFields({ ...fields, type: val })}
            options={[
              {
                value: "Email",
                label: "Email",
              },
              { value: "FullName", label: "FullName" },
            ]}
          />
          <Input.Search
            value={fields.search}
            onChange={(e) => setFields({ ...fields, search: e.target.value })}
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
          Add User
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
          btnTxt={"yes i delete it."}
          desc={"You want to delete User"}
          setDeleteModal={setDeleteModal}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default Users;
