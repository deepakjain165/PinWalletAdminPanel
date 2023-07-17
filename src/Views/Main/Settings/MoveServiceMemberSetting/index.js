import React, { useEffect, useState } from "react";
import Header from "../../../../Common/Header";
import { useCustomState } from "../../../../Hooks/Usehooks";
import { Select, Button, Checkbox, Table } from "antd";
import { getMoveServiceMemberSetting } from "./ApiFun";
import { getupdatedMoveServiceMemberSetting } from "./ApiFun";
import ConfirmModal from "../../../../Common/ConfirmModal";
import { getPartnerIdServiceMoveTo } from "./ApiFun";
import { columns } from "./ColumnData";
import PaginationComponent from "../../../../Common/Pagination";
function MoveServiceMemberSetting() {
  const totalCount = 100;
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
  } = useCustomState(getDetailsMoveServiceMemberSetting, null, 100);
  const [openModal, setOpenModal] = useState(false);
const[fields,setFields] = useState({
  members:"",
  services:"",
  moveToList:""
})
  const [data, setData] = useState({
    members: [],
    services: [],
    moveToList: [],
  });
  useEffect(() => {
    getPartnerIdServiceMoveTo()
      .then((response) => {
        setData({
          members: response.data.members.map((i, index) => {
            return {
              label: (
                <div>
                  {i.partnerName} |{""} {i.partnerEmail} <br />
                  {i.partnerPhone}
                </div>
              ),
              value: i.partnerId,
            };
          }),
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
  function getDetailsMoveServiceMemberSetting(page) {
    const payload = {
      Sort: {},
      Pagination: {
        Start: start,
        TotalItemCount: totalCount,
        Number: page,
        NumberOfPages: numberOfPAges,
      },
      Search: {},
    };
    getMoveServiceMemberSetting(payload).then((response) => {
      setShowSpin(false);
      const filterdData = response.items.map((item, index) => {
        return {
          ...item,
          sno: index + 1,
          key: index,
        };
      });
      setDataSource(filterdData);
      setNumberOfPages(response.numberOfPages);
      console.log(filterdData,"Number")
    });
  }
  useEffect(() => {
    getDetailsMoveServiceMemberSetting();
  }, []);
  const handleServiceChange = (record) => {
    let newData = [...dataSource];
    newData.map((i, index) => {
      if (i.id === record.id) {
        return (i.isFlat = !i.isFlat);
      }
    });
    setDataSource(newData);
  };
  function updateMoveServiceMemberSetting() {
    getupdatedMoveServiceMemberSetting().then((response) => {});
  }
  return (
    <div>
      <Header PageName={" Move Service Member Setting "} />
      <div>
        <div className="flex justify-center items-center">
          <div className="bg-white w-full lg:w-1/2 shadow-md shadow-gray-500 py-8 px-4">
            <div className="grid font-semibold grid-cols-2 place-items-center px-8 py-6 gap-5 leading-6 items-center ">
              <p>Partner Id :</p>
              <Select
                placeholder="Select/Search Partner"
                onChange={(value) =>
                  setFields({ ...fields, members:(value) })
                }
                value={fields.members}
                options={data.members}
                className="w-full"
              />

              <>
                <p>Service :</p>
                <Select
                disabled={(fields.members==="")?true:false}
                value={fields.services}
                  placeholder="Select Service"
                  options={data.services}
                  onChange={(value) =>
                    setFields({ ...fields, services:(value) })
                  }
                  className="w-full"
                />
                <p>MoveTo :</p>
                <Select
                disabled={(fields.members==="")?true:false}
                value={fields.moveToList}
                  placeholder="-Select Move To-"
                  options={data.moveToList}
                  onChange={(value) =>
                    setFields({ ...fields, moveToList:(value) })
                  }
                  className="w-full"
                />

                <p>IsActive :</p>

                <Checkbox
                  className="w-full "
                  // checked={true}
                  // onChange={(e) =>
                  //   setFields({ ...fields, isFlat: e.target.checked })
                  // }
                  // checked={fields.isFlat}
                />
              </>

              <div className="flex justify-items-center col-span-2">
                <Button
                  className="bg-gray-800 cursor-pointer text-white font-semibold p-2 h-10 rounded-md"
                  onClick={setOpenModal}
                >
                  Submit
                </Button>
                <Button
                  className="bg-red-500 cursor-pointer text-white font-semibold p-2 h-10 rounded-md"
                  onClick={()=> setFields({ ...fields, members: "" ,services: "" ,moveToList: ""})}
                >
                  Clear
                </Button>
              </div>
            </div>
          </div>
        </div>
        {openModal && (
          <ConfirmModal
            handleDelete={updateMoveServiceMemberSetting}
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
      />

      <PaginationComponent
        setNumberOfData={setNumberOfData}
        current={current}
        numberOfPAges={numberOfPAges}
        start={start}
        apiFunction={getDetailsMoveServiceMemberSetting}
        handlepageChange={handlepageChange}
        numberOfData={numberOfData}
      />
    </div>
  );
}
export default MoveServiceMemberSetting;
