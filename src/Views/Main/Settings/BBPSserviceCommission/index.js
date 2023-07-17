import React, { useEffect, useState } from "react";
import PaginationComponent from "../../../../Common/Pagination";
import { message } from "antd";
import { messageConfiguration } from "../../../../Utils";
import { columns } from "../BBPSserviceCommission/ColumnData";
import ConfirmModal from "../../../../Common/ConfirmModal";
import { getBBPSCommission } from "./ApiFun";
import { updateBBPScommission } from "./ApiFun";
import { useCustomState } from "../../../../Hooks/Usehooks";
import CommonSettingLayout from "../../../../Common/CommonSettingLayout";
function BBPSserviceCommission() {
  const totalCount = 100;
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
  } = useCustomState(getDetailsBBPSserviceCommission, null, 100);
  const [fields, setFields] = useState("");
  const [openModal, setOpenModal] = useState(false);
  function getDetailsBBPSserviceCommission(page, start) {
    setShowSpin(true);
    const payload = {
      Sort: {
        Predicate: null,
        Reverse: false,
      },
      Pagination: {
        Start: start,
        TotalItemCount: totalCount,
        Number: page,
        NumberOfPages: numberOfPAges,
      },
      Search: {
        PredicateObject:
          fields !== null && fields !== "" ? { PackageId: fields } : null,
      },
    };
    getBBPSCommission(payload)
      .then((res) => {
        setShowSpin(false);
        const filterdData = res.items.map((item, index) => {
          return {
            ...item,
            sno: index + 1,
            key: index,
          };
        });
        setDataSource(filterdData);
        setNumberOfPages(res.numberOfPages);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setShowSpin(false));
  }
  useEffect(() => {
    getDetailsBBPSserviceCommission(numberOfData, start);
  }, [fields]);
  const handleCheckboxChange = (record) => {
    let newData = [...dataSource];
    newData.map((i, index) => {
      if (i.id === record.id) {
        return (i.isFlat = !i.isFlat);
      }
    });
    setDataSource(newData);
  };
  const handleAmoutChange = (record, value) => {
    let newData = [...dataSource];
    newData.map((i) => {
      if (i.id === record.id) {
        return (i.amount = value);
      }
    });
    console.log(newData);
    setDataSource(newData);
  };
  function updateBBPSserviceCommission(page) {
    updateBBPScommission(dataSource)
      .then((res) => {
        if (res.success == true) {
          message.open(messageConfiguration("success", res.message, 3));
        } else {
          message.open(messageConfiguration("error", "Try Again", 3));
        }
        setShowSpin(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setOpenModal(false));
  }
  return (
    <div>
      <CommonSettingLayout
        PageName={"BBPS service Commission"}
        setFields={setFields}
        fields={fields}
        btnText={"Update"}
        showButton={true}
        showSpin={showSpin}
        handleButton={setOpenModal}
        columns={columns(handleAmoutChange, handleCheckboxChange)}
        dataSource={dataSource}
      />
      {/* <div className="input_fields mt-8">
        <Select
          onChange={(value) => setFields(value)}
          className=" w-1/6  "
          defaultValue={PackageName[0].value}
          options={PackageName}
        />

        <br />
      </div> */}
      {/* <button className="bg-slate-400" onClick={updateRechargeCommission}>
        Update
      </button> */}

      <PaginationComponent
        setNumberOfData={setNumberOfData}
        current={current}
        numberOfPAges={numberOfPAges}
        start={start}
        apiFunction={getDetailsBBPSserviceCommission}
        handlepageChange={handlepageChange}
        numberOfData={numberOfData}
      />
      {openModal && (
        <ConfirmModal
          handleDelete={updateBBPSserviceCommission}
          deleteModal={openModal}
          btnTxt={"Yes, Update!"}
          desc={"You want to Update this BBPS service Commission settings."}
          setDeleteModal={setOpenModal}
        />
      )}
    </div>
  );
}
export default BBPSserviceCommission;
