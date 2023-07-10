import React, { useEffect, useState } from "react";
import PaginationComponent from "../../../Common/Pagination";
import { Input, Spin, Table, message } from "antd";
import {
  addIp,
  changeIpstatusDetail,
  deleteIp,
  getPartnerIpsList,
  updateIpDetail,
} from "../../../services/apiFunctions";
import { messageConfiguration } from "../../../Utils";
import ConfirmModal from "../../../Common/ConfirmModal";
import { NavLink, useLocation } from "react-router-dom";
import { PartnerIpcolumn } from "./PartnerIpcolumnData";

const PartnerIps = () => {
  const location = useLocation();
  console.log(location, "jkdwejkwe");
  const [start, setStart] = useState(0);
  const [current, setCurrent] = useState(1);
  const [numberOfData, setNumberOfData] = useState(30);
  const totalCount = 30;
  const [numberOfPAges, setNumberOfPages] = useState(0);
  const [showSpin, setShowSpin] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [fields, setFields] = useState("");
  const [deleteModal, setDeleteModal] = useState(null);
  const [packageId, setPackageId] = useState(null);
  const [Ip, setIp] = useState("");
  const [ipId,setIpId]=useState(null)
  const getPArtnerIp = (page, start) => {
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
          fields !== null && fields !== "" ? { IpAddress: fields } : null,
      },
      Sort: {},
    };
    getPartnerIpsList(payload, location.state.id)
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
    getPArtnerIp(numberOfData, start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteModal]);
  const handleSearchString = () => {
    getPArtnerIp(numberOfData, 0);
  };
  const handlepageChange = (page, pagesize) => {
    setCurrent(page);
    setStart((page - 1) * numberOfData);
    // setStart((page - 1) * numberOfData)
    const startPage = (page - 1) * numberOfData;
    getPArtnerIp(numberOfData, startPage);
  };
  const handleDelete = () => {
    deleteIp(ipId.id)
      .then((res) => {
        message.open(
          messageConfiguration("success", "IP Deleted Successfully", 3)
        );
        setDeleteModal(false);
        getPArtnerIp(numberOfData, start);
      })
      .catch((err) => console.log(err));
  };
  const handlechangeStatus = (id) => {
    changeIpstatusDetail(id)
      .then((res) => {
        getPArtnerIp(numberOfData, start);
      })
      .catch((err) => console.log(err));
  };
  const handleAdd = (id) => {
    packageId === null
      ? addIp({ ipAddress: Ip, partnerId: location.state?.id })
          .then((res) => {
            message.open(messageConfiguration("success", res.message, 3));
            getPArtnerIp(numberOfData, start);
            setPackageId(null);
            setIp("")
          })
          .catch((err) => console.log(err))
      : updateIpDetail({
          partnerId: packageId.partnerId,
          user: null,
          ipAddress: Ip,
          createdOn: packageId.createdOn,
          updatedOn: packageId.updatedOn,
          isActive: true,
          isDelete: false,
          id: packageId.id,
        })
          .then((res) => {
            message.open(messageConfiguration("success", res.message, 3));
            getPArtnerIp(numberOfData, start);
            setPackageId(null);
          })
          .catch((err) => console.log(err));
  };
  return (
    <>
      <p className="font-bold text-lg mb-4">IP Addresses List</p>
      <div className="flex mb-2 justify-between items-center flex-wrap">
        <div className="mb-4">
          <p className="font-semibold mb-2">IP Address</p>
          <div className="flex justify-start items-center gap-3">
            <Input
              value={Ip}
              onChange={(e) => setIp(e.target.value)}
              className=" h-10"
            />
            <button
              onClick={handleAdd}
              className={`${
                Ip === "" ? "bg-gray-500" : "bg-[#113150]"
              }  text-white font-bold flex justify-center items-center p-3 h-10 rounded-sm`}
            >
              {packageId !== null ? "Update" : "Add"}
            </button>
          </div>
        </div>
        <NavLink to="/partners">
          <p className="bg-[#113150] p-3 text-white rounded-lg cursor-pointer">
            Back
          </p>
        </NavLink>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-y-2">
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
      </div>
      <div className="mt-3">
        <Spin spinning={showSpin} tip="Loading...">
          <Table
            className="custom-table overflow-x-scroll text-white rounded-none"
            columns={PartnerIpcolumn(
              setDeleteModal,
              handlechangeStatus,setIp,setIpId
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
      {deleteModal && (
        <ConfirmModal
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
          openby="Ip Address"
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default PartnerIps;
