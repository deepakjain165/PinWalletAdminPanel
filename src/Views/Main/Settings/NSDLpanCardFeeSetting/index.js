import React, { useEffect, useState } from "react";
import Header from "../../../../Common/Header";
import { Input, Select } from "antd";
import { getPackageListdata } from "../../../../services/apiFunctions";
import {  getNsdlPanfee } from "./ApiFun";
import { ConvertInRs, ExtractDate, ExtractTime } from "../../../../Utils";
import ConfirmModal from "../../../../Common/ConfirmModal";
function NsDlPanCardFee() {
  const [packageData, setPackageData] = useState([]);
  const [nsdlData, setnsdlData] = useState({});
  const [showToggle, setShowToggle] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [amount, setamount] = useState(0);
  useEffect(() => {
    getPackageListdata()
      .then((res) => {
        const changed = res.data.map((i, index) => {
          return { label: i.text, value: i.value };
        });
        setPackageData(changed);
      })
      .catch((err) => console.log(err));
  }, []);
  const getNsdlData = (val) => {
    getNsdlPanfee(val)
      .then((res) => {
        setnsdlData(res?.data);
        setamount(res.data.amount);
        setShowToggle(true);
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Header PageName={"NSDL PAN Card Fees Setting"} />
      <div className="flex justify-center mt-3 items-center">
        <div className="bg-white shadow-md font-semibold shadow-gray-500 p-3  ">
          <div className="grid grid-cols-2 place-items-center gap-6 ">
            <p className="required">Package</p>
            <Select
              className="w-full"
              options={packageData}
              onChange={(val) => getNsdlData(val)}
              placeholder="Select an Option"
            />
            {showToggle && (
              <>
                <p>Previous Fee</p>
                <p className="bg-gray-600 rounded-md p-2 text-end w-full">
                  {ConvertInRs(nsdlData.amount ?? 0)}
                </p>
                <p>Latest Updated On</p>
                <p className="bg-gray-600 rounded-md p-2 w-full text-end">
                  {`${ExtractTime(nsdlData.latestUpdatedOn)} | ${ExtractDate(
                    nsdlData.latestUpdatedOn
                  )}`}
                </p>
                <p>Per PAN Card Fee</p>
                <Input
                  value={amount}
                  onChange={(e) => setamount(Number(e.target.value))}
                  type="number"
                />
              </>
            )}
          </div>
          <div className="flex justify-end mt-3 items-center  col-span-2">
            {" "}
            <p
              onClick={() => setOpenModal(true)}
              className="bg-[#113150] cursor-pointer  rounded-md p-2 text-white"
            >
              Submit
            </p>
          </div>{" "}
        </div>
      </div>
      {openModal && (
        <ConfirmModal
          btnTxt={"Yes!"}
          deleteModal={openModal}
          desc={"You want Submit this Fees Setting."}
          setDeleteModal={setOpenModal}
          handleDelete={handleSubmit}
        />
      )}
    </>
  );
}
export default NsDlPanCardFee;
