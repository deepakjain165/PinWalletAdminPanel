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
  // useEffect(() => {
  //   getDetailsMiniStatement();
  // }, [fields]);
  return (
    <div>
      <Header PageName={"Mini Statement Commission"} />
      <div>
        <div className="flex justify-center items-center">
          <div className="bg-white w-full lg:w-1/2 shadow-md shadow-gray-500 py-8 px-4">
            <div className="grid font-semibold grid-cols-2 place-items-center px-8 py-6 gap-5 leading-6 items-center ">
              <p className="required">Package</p>
              <Select
                placeholder="Select an Option"
                onChange={(val) => {
                  getDetailsMiniStatement(val);
                  setIsOpen(true);
                }}
                options={packageData}
                className="w-full"
              />
     
              {isOpen && (
                <>
                  <p>Previous Amount</p>
                  <p className="w-full ">
                    {data.amount}
                    {data.isFlat ? <span>Rs.</span> : <span>%</span>}
                  </p>

                  <p>Latest Updated On</p>
                  <p className="w-full ">
                    {ExtractTime(data.latestUpdatedOn)} | {""}
                    {ExtractDate(data.latestUpdatedOn)}
                  </p>

                  <p>Amount</p>
                  <Input
                  
                    type="number"
                    min={0}
                    value={fields.amount}
                    onChange={(e) =>
                      setFields({ ...fields, amount: Number(e.target.value) })
                    }
                  />

                  <p>IsFlat</p>

                  <Checkbox
                    className="w-full "
                    onChange={(e) =>
                      setFields({ ...fields, isFlat: e.target.checked })
                    }
                    checked={fields.isFlat}
                  />
                </>
              )}

              {isOpen && (
                <div className="flex justify-items-center col-span-2">
                  <Button
                    className="bg-gray-800 cursor-pointer text-white font-semibold p-2 h-10 rounded-md"
                    onClick={setOpenModal}
                  >
                    Submit
                  </Button>
                </div>
              )}
            </div>
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
