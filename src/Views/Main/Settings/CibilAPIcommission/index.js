import React, { useEffect, useState } from "react";
import Header from "../../../../Common/Header";
import { Input, Select } from "antd";
import { getPackageListdata } from "../../../../services/apiFunctions";
import { GetCibilApiComm } from "./ApiFun";
import { ConvertInRs, ExtractDate, ExtractTime } from "../../../../Utils";
import ConfirmModal from "../../../../Common/ConfirmModal";
function CibilAPIcommission() {
  const [packageData, setPackageData] = useState([]);
  const [cibilData, setCibilData] = useState({});
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
  const getCibilRelatedData = (val) => {
    GetCibilApiComm(val)
      .then((res) => {
        setCibilData(res?.data);
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
      <Header PageName={"CibilAPI Commission"} />
      <div className="flex justify-center mt-3 items-center">
        <div className="bg-white shadow-md font-semibold shadow-gray-500 p-3  ">
          <div className="grid grid-cols-2 place-items-center gap-6 ">
            <p className="required">Package</p>
            <Select
              className="w-full"
              options={packageData}
              onChange={(val) => getCibilRelatedData(val)}
              placeholder="Select an Option"
            />
            {showToggle && (
              <>
                <p>Previous Fee</p>
                <p className="bg-gray-600 rounded-md p-2 text-end w-full">
                  {ConvertInRs(cibilData.amount ?? 0)}
                </p>
                <p>Latest Updated On</p>
                <p className="bg-gray-600 rounded-md p-2 w-full text-end">
                  {`${ExtractTime(cibilData.latestUpdatedOn)} | ${ExtractDate(
                    cibilData.latestUpdatedOn
                  )}`}
                </p>
                <p>Amount</p>
                <Input
                  value={amount}
                  onChange={(e) => setamount(Number(e.target.value))}
                  type="number"
                />
              </>
            )}
          </div>
          {showToggle && (
            <div className="flex justify-end mt-3 items-center  col-span-2">
              {" "}
              <p
                onClick={() => setOpenModal(true)}
                className="bg-[#113150] cursor-pointer  rounded-md p-2 text-white"
              >
                Submit
              </p>
            </div>
          )}
        </div>
      </div>
      {openModal && (
        <ConfirmModal
          btnTxt={"Yes!"}
          deleteModal={openModal}
          desc={"You want Submit this Commission Setting."}
          setDeleteModal={setOpenModal}
          handleDelete={handleSubmit}
        />
      )}
    </>
  );
}
export default CibilAPIcommission;
