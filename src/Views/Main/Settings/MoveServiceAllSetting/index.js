import React, { useEffect, useState } from "react";
import Header from "../../../../Common/Header";
import { Table, Select, Button } from "antd";
import { useCustomState } from "../../../../Hooks/Usehooks";
import { getMoveServiceAll } from "./ApiFun";
import PaginationComponent from "../../../../Common/Pagination";
import ConfirmModal from "../../../../Common/ConfirmModal";
import { columns } from "./ColumnData";
import { getServiceMoveTo } from "./ApiFun";
function MoveServiceAllSetting() {
  const {
    handlepageChange,
    start,
    current,
    setNumberOfData,
    numberOfData,
    numberOfPAges,
    setNumberOfPages,
    setShowSpin,
    showSpin,
    dataSource,
    setDataSource,
  } = useCustomState(getDetailMoveSeviceAllSetting, null, 100);
  const [openModal, setOpenModal] = useState(false);
  const [fields, setFields] = useState({
    members: "",
    services: "",
    moveToList: "",
  });
  const [details, setDetails] = useState({
    services: [],
    moveToList: [],
  });
  useEffect(() => {
    getServiceMoveTo()
      .then((response) => {
        setDetails({
          services: response.data.services.map((i, index) => {
            return {
              label: i,
              value: index,
            };
          }),
          moveToList: response.data.moveToList.map((i, index) => {
            return {
              label: i,
              value: index,
            };
          }),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function getDetailMoveSeviceAllSetting() {
    getMoveServiceAll().then((response) => {
      setShowSpin(false);
      const filterdData = response.data.map((item, index) => {
        return {
          ...item,
          sno: index + 1,
          key: index,
        };
      });
      setDataSource(filterdData);
      setNumberOfPages(response.numberOfPages);
     
    });
  }
  useEffect(() => {
    getDetailMoveSeviceAllSetting();
  }, []);
  return (
    <div>
      <Header PageName={" Move Service All Setting "} />
      <div>
        <div className="flex justify-center items-center">
          <div className="bg-white w-full lg:w-1/2 shadow-md shadow-gray-500 py-8 px-4">
            <div className="grid font-semibold grid-cols-2 place-items-center px-8 py-6 gap-5 leading-6 items-center ">
              <p>Service :</p>
              <Select
                value={fields.services}
                placeholder="Select Service"
                options={details.services}
                onChange={(value) => setFields({ ...fields, services: value })}
                className="w-full"
              />
              <p>MoveTo :</p>
              <Select
                value={fields.moveToList}
                placeholder="-Select Move To-"
                options={details.moveToList}
                onChange={(value) =>
                  setFields({ ...fields, moveToList: value })
                }
                className="w-full"
              />
              <div className="flex justify-items-center col-span-2">
                <Button
                  className="bg-gray-800 cursor-pointer text-white font-semibold p-2 h-10 rounded-md"
                  // onClick={setOpenModal}
                >
                  Move All
                </Button>
                <Button
                  className="bg-red-500 cursor-pointer text-white font-semibold p-2 h-10 rounded-md"
                  onClick={() =>
                    setFields({ ...fields, services: "", moveToList: "" })
                  }
                >
                  Clear
                </Button>
              </div>
            </div>
          </div>
        </div>
        {openModal && (
          <ConfirmModal
            // handleDelete={updateMoveServiceMemberSetting}
            deleteModal={openModal}
            btnTxt={"Yes, Update!"}
            desc={"You want to Update this Move Service Member  settings."}
            setDeleteModal={setOpenModal}
          />
        )}
      </div>
      <Table
        className="custom-table overflow-x-scroll text-white rounded-none mt-8"
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />

      {/* <PaginationComponent
        setNumberOfData={setNumberOfData}
        current={current}
        numberOfPAges={numberOfPAges}
        start={start}
        apiFunction={getDetailMoveSeviceAllSetting}
        handlepageChange={handlepageChange}
        numberOfData={numberOfData}
      /> */}
    </div>
  );
}
export default MoveServiceAllSetting;
