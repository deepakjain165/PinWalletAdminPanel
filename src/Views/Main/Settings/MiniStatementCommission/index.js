import React, { useEffect, useState } from "react";
import { ExtractDate, ExtractTime } from "../../../../Utils";
import Header from "../../../../Common/Header";
import { message } from "antd";
import { messageConfiguration } from "../../../../Utils";
import ConfirmModal from "../../../../Common/ConfirmModal";
import { Select, Input, Checkbox, Button } from "antd";
import { getPackageListdata } from "../../../../services/apiFunctions";
import { getMiniStatement, getupdatedMiniStatement } from "./ApiFun";
function MiniStatementCommission() {
  const [packageData, setPackageData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [fields, setFields] = useState({
    amount: 0,
    isFlat: false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    getPackageListdata()
      .then((response) => {
        const changes = response.data.map((i, index) => {
          return { label: i.text, value: i.value };
        });
        setPackageData(changes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function getDetailsMiniStatement(value) {
    getMiniStatement(value)
      .then((response) => {
        setData(response.data);
        setFields({
          amount: response.data.amount,
          isFlat: response.data.isFlat,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function updateMiniStatement() {
    let payload = { ...data };
    payload = { ...payload, amount: fields.amount, isFlat: fields.isFlat };
    getupdatedMiniStatement(payload)
      .then((response) => {
        if (response.success) {
          message.open(messageConfiguration("success", response.message, 3));
        } else {
          message.open(messageConfiguration("error", "Try Again", 3));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setOpenModal(false));
  }
  return (
    <div>
      <Header PageName={"Mini Statement Commission"} />
      <div>
        <div className="mt-6 flex justify-center border-gray-100">
          <div className="divide-y divide-gray-100 shadow-sm shadow-gray-300">
            <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <label className="text-sm font-medium leading-6 text-gray-900">
                Package
              </label>
              <Select
                className=" mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0 "
                onChange={(val) => {
                  getDetailsMiniStatement(val);
                  setIsOpen(true);
                }}
                options={packageData}
              />
            </div>
            {isOpen && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <label className="text-sm font-medium leading-6 text-gray-900">
                  Previous Amount
                </label>
                <span className="mt-1 text-sm leading-6 p-1  sm:col-span-2 sm:mt-0 bg-slate-400 h-8">
                  {data.amount}
                  {data.isFlat ? <span>Rs.</span> : <span>%</span>}
                </span>
              </div>
            )}
            {isOpen && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <label className="text-sm font-medium leading-6 text-gray-900">
                  Latest Updated On
                </label>
                <span className="mt-1 uppercase text-sm leading-6 p-1 sm:col-span-2 sm:mt-0 bg-slate-400 h-8">
                  {ExtractTime(data.latestUpdatedOn)} | {""}
                  {ExtractDate(data.latestUpdatedOn)}
                </span>
              </div>
            )}

            {isOpen && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <label className="text-sm font-medium leading-6 text-gray-900">
                  Amount
                </label>
                <Input
                  type="number"
                  min={0}
                  value={fields.amount}
                  onChange={(e) =>
                    setFields({ ...fields, amount: Number(e.target.value) })
                  }
                />
              </div>
            )}

            {isOpen && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <label className="text-sm font-medium leading-6 ">IsFlat</label>

                <Checkbox
                  onChange={(e) =>
                    setFields({ ...fields, isFlat: e.target.checked })
                  }
                  checked={fields.isFlat}
                />
              </div>
            )}
            {isOpen && (
              <div className="flex justify-items-center p-2 sm:grid sm:grid-cols-1 sm:px-0 ">
                <Button
                  className="bg-black h-11 text-base  text-white hover:text-white"
                  onClick={setOpenModal}
                >
                  Submit
                </Button>
              </div>
            )}
          </div>
        </div>
        {openModal && (
          <ConfirmModal
            handleDelete={updateMiniStatement}
            deleteModal={openModal}
            btnTxt={"Yes, Update!"}
            desc={"You want to Update this Mini Statement Commission settings."}
            setDeleteModal={setOpenModal}
          />
        )}
      </div>
    </div>
  );
}
export default MiniStatementCommission;
