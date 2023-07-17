import React, { useEffect, useState } from "react";
import { columns } from "./ColumnData";
import { useCustomState } from "../../../../Hooks/Usehooks";
import CommonSettingLayout from "../../../../Common/CommonSettingLayout";
import PaginationComponent from "../../../../Common/Pagination";
import ConfirmModal from "../../../../Common/ConfirmModal";
import { getupdateVerificationApiServiceCommission } from "./ApiFun";
import { getVerificationApiServiceCommission } from "./ApiFun";
import { message } from "antd";
import { messageConfiguration } from "../../../../Utils";
function VerificationAPIserviceCommission() {
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
  } = useCustomState(getDetailsVerificationApiServiceCommission, null, 100);
  const [fields, setFields] = useState("");
  const [openModal, setOpenModal] = useState(false);
  function getDetailsVerificationApiServiceCommission(page,start) {
    setShowSpin(true);
    const payload = {
      Sort: {  
        
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
    getVerificationApiServiceCommission(payload).then((response) => {
      setShowSpin(false);
      console.log(response, "details request");
      const filterdData = response.items.map((item, index) => {
        return {
          ...item,
          sno: index + 1,
          key: index,
        };
      });
      setDataSource(filterdData);
      setNumberOfPages(response.numberOfPages);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => setShowSpin(false));

  }
  useEffect(() => {
    getDetailsVerificationApiServiceCommission(numberOfData,start);
  }, [fields]);
  const handleAmoutChange = (record, value) => {
    let newData = [...dataSource];
    newData.map((i) => {
      if (i.id === record.id) {
        return (i.amount = value);
      }
    })
    setDataSource(newData);
  };
  function updateVerificationApiServiceCommission(page) {
    getupdateVerificationApiServiceCommission(dataSource)
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
        PageName={"Verification API Service Commission"}
        setFields={setFields}
        fields={fields}
        btnText={"Update"}
        showButton={true}
        showSpin={showSpin}
        handleButton={setOpenModal}
        columns={columns(handleAmoutChange)}
        dataSource={dataSource}
      />
      <PaginationComponent
        setNumberOfData={setNumberOfData}
        current={current}
        numberOfPAges={numberOfPAges}
        start={start}
        apiFunction={getDetailsVerificationApiServiceCommission}
        handlepageChange={handlepageChange}
        numberOfData={numberOfData}
      />
      {openModal && (
        <ConfirmModal
          handleDelete={updateVerificationApiServiceCommission}
          deleteModal={openModal}
          btnTxt={"Yes, Update!"}
          desc={"You want to Update this Verification API Service Commission settings."}
          setDeleteModal={setOpenModal}
        />
      )}
    </div>
  );
}
export default VerificationAPIserviceCommission;
