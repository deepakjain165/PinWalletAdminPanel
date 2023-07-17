import React, { useEffect, useState } from "react";
import CommonSettingLayout from "../../../../Common/CommonSettingLayout";
import { PackageName } from "../../../../Utils/Options";
import { useCustomState } from "../../../../Hooks/Usehooks";
import { columns } from "./ColumnData";
import PaginationComponent from "../../../../Common/Pagination";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../../../../Common/ConfirmModal";
import { message } from "antd";
import { messageConfiguration } from "../../../../Utils";
import { aepsEndpoint, deleteAepssurcharge, getAepsSurcharge } from "./ApiFun";
function AepsCommission() {
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
  } = useCustomState(getAllAepsSurcharge, null, 100);
  const totalCount = 100;
  const navigate = useNavigate();
  const [fields, setFields] = useState("");
  const [openModal, setOpenmodal] = useState(false);
  const [recordDetail, setRecordDetail] = useState(null);
  function getAllAepsSurcharge(page, start) {
    setShowSpin(true);
    const payload = {
      Sort: {},
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
    getAepsSurcharge(payload)
      .then((response) => {
        const addSno = response.items.map((i, index) => {
          return { ...i, sno: index + 1 };
        });
        setDataSource(addSno);
        setNumberOfPages(response.numberOfPages);
      })
      .catch((err) => console.log(err))
      .finally(() => setShowSpin(false));
  }
  useEffect(() => {
    getAllAepsSurcharge(numberOfData, start);
   
  }, [fields]);
  const handleNavigate = () => {
    navigate("/common-settings/aeps-comm-setting/change", {
      state: {
        endpoint: aepsEndpoint.addsurchargeForAeps,
        from: "Add Credit Card Surcharge",
      },
    });
  };
  const handleDelete = () => {
    deleteAepssurcharge(`/${recordDetail.id}`)
      .then((res) => {
        message.open(
          messageConfiguration(
            "success",
            "surcharge setting has been deleted.",
            3
          )
        );
        setOpenmodal(false);
        getAllAepsSurcharge(numberOfData, start);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <CommonSettingLayout
        PageName={"AEPS Commission List"}
        fields={fields}
        handleButton={handleNavigate}
        setFields={setFields}
        options={PackageName}
        showSpin={showSpin}
        btnText={"Add Commission"}
        showButton={true}
        columns={columns(setRecordDetail, setOpenmodal)}
        dataSource={dataSource}
      />
      <PaginationComponent
        current={current}
        numberOfPAges={numberOfPAges}
        start={start}
        setNumberOfData={setNumberOfData}
        apiFunction={getAllAepsSurcharge}
        handlepageChange={handlepageChange}
        numberOfData={numberOfData}
      />
      {openModal && (
        <ConfirmModal
          btnTxt={"Yes i delete it."}
          deleteModal={openModal}
          desc={"You want to delete this surcharge setting."}
          setDeleteModal={setOpenmodal}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}
export default AepsCommission;
